import json
import re

# Import the reserve dictionaries
from generate_ucln_reserves import ucln_reserve
from generate_bcnn_reserves import bcnn_reserve

def reinject(filename, prefix, reserve_dict):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # Step 1: Clean any previous injected questions
    cleaned = re.sub(
        r',\s*\{\s*\"id\":\s*\"' + prefix + r'-\d+-v[4-8]\".*?hint\":\s*\"[^\"]*\"\s*\}',
        '',
        content,
        flags=re.DOTALL
    )

    # Step 2: Inject floor by floor in descending order (20 down to 1) so indices don't shift!
    for floor in range(20, 0, -1):
        v3_id = f"{prefix}-{floor}-v3"
        idx_v3 = cleaned.find(v3_id)
        if idx_v3 == -1:
            raise ValueError(f"Cannot find {v3_id} in {filename}")
        idx_hint = cleaned.find("hint:", idx_v3)
        if idx_hint == -1:
            raise ValueError(f"Cannot find hint for {v3_id} in {filename}")
        idx_brace = cleaned.find("}", idx_hint)
        if idx_brace == -1:
            raise ValueError(f"Cannot find closing brace for {v3_id} in {filename}")

        reserves = reserve_dict[floor]
        reserve_ts = ""
        for q in reserves:
            q_json = json.dumps(q, ensure_ascii=False, indent=6)
            reserve_ts += f",\n    {q_json}"

        cleaned = cleaned[:idx_brace+1] + reserve_ts + cleaned[idx_brace+1:]

    with open(filename, "w", encoding="utf-8") as f:
        f.write(cleaned)

    print(f"Successfully reinjected 100 questions into {filename}!")

# Process UCLN
reinject("src/data/uclnQuestions.ts", "ucln", ucln_reserve)

# Process BCNN
reinject("src/data/bcnnQuestions.ts", "bcnn", bcnn_reserve)

print("ALL DONE!")
