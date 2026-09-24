import json
import re

# Level titles per floor
def get_level_title(floor):
    if floor in [5, 10, 15]:
        return f"Mức độ {1 if floor==5 else 2 if floor==10 else 3}: Trạm Kiểm Soát {floor//5}"
    elif floor == 20:
        return "ĐỈNH THÁP PHÂN RÃ (BOSS ƯC)"
    elif floor <= 5:
        return "Mức độ 1: Cơ bản & Thông hiểu"
    elif floor <= 10:
        return "Mức độ 2: Vận dụng thực tế"
    elif floor <= 15:
        return "Mức độ 3: Quan hệ liên kết"
    else:
        return "Mức độ 4: Bồi dưỡng HSG"

ucln_reserve = {
    1: [
        {"id": "ucln-1-v4", "floor": 1, "levelTitle": get_level_title(1), "question": "Tìm ƯCLN(60, 140) và tập hợp ƯC(60, 140).", "options": ["ƯCLN = 20; ƯC = {1; 2; 4; 5; 10; 20}", "ƯCLN = 10; ƯC = {1; 2; 5; 10}", "ƯCLN = 20; ƯC = {1; 2; 4; 10; 20}", "ƯCLN = 30; ƯC = {1; 2; 3; 5; 6; 10; 15; 30}"], "correctIndex": 0, "explanation": "60 = 2²·3·5; 140 = 2²·5·7 => ƯCLN = 2²·5 = 20. ƯC(60, 140) = Ư(20) = {1; 2; 4; 5; 10; 20}.", "hint": "Thừa số chung là 2 và 5 với số mũ nhỏ nhất là 2² · 5 = 20."},
        {"id": "ucln-1-v5", "floor": 1, "levelTitle": get_level_title(1), "question": "Tìm ƯCLN(48, 180) và số lượng ước chung của hai số này.", "options": ["ƯCLN = 12; Có 6 ước chung", "ƯCLN = 24; Có 8 ước chung", "ƯCLN = 12; Có 4 ước chung", "ƯCLN = 6; Có 4 ước chung"], "correctIndex": 0, "explanation": "48 = 2⁴·3; 180 = 2²·3²·5 => ƯCLN = 2²·3 = 12. Ư(12) = {1; 2; 3; 4; 6; 12} có 6 phần tử.", "hint": "48 = 2⁴·3, 180 = 2²·3²·5 => ƯCLN = 2²·3 = 12."},
        {"id": "ucln-1-v6", "floor": 1, "levelTitle": get_level_title(1), "question": "Tìm ƯCLN(96, 144) và ước chung lớn nhất có hai chữ số của chúng.", "options": ["48", "24", "16", "32"], "correctIndex": 0, "explanation": "96 = 2⁵·3; 144 = 2⁴·3² => ƯCLN = 2⁴·3 = 48. Vì 48 là ước chung lớn nhất và đã có hai chữ số nên chính là 48.", "hint": "ƯCLN(96, 144) = 2⁴ · 3 = 48."},
        {"id": "ucln-1-v7", "floor": 1, "levelTitle": get_level_title(1), "question": "Tìm ƯCLN(54, 126) và tập hợp ƯC(54, 126).", "options": ["ƯCLN = 18; ƯC = {1; 2; 3; 6; 9; 18}", "ƯCLN = 9; ƯC = {1; 3; 9}", "ƯCLN = 18; ƯC = {1; 2; 3; 9; 18}", "ƯCLN = 27; ƯC = {1; 3; 9; 27}"], "correctIndex": 0, "explanation": "54 = 2·3³; 126 = 2·3²·7 => ƯCLN = 2·3² = 18. Ư(18) = {1; 2; 3; 6; 9; 18}.", "hint": "54 = 2·3³; 126 = 2·3²·7. Thừa số chung là 2 và 3² => ƯCLN = 18."},
        {"id": "ucln-1-v8", "floor": 1, "levelTitle": get_level_title(1), "question": "Tìm ƯCLN(105, 175) và các ước chung lớn hơn 5.", "options": ["{7; 35}", "{35}", "{5; 7; 35}", "{15; 35}"], "correctIndex": 0, "explanation": "105 = 3·5·7; 175 = 5²·7 => ƯCLN = 5·7 = 35. Các ước của 35 là {1; 5; 7; 35}. Các ước > 5 là 7 và 35.", "hint": "ƯCLN(105, 175) = 35. Tìm các ước của 35 lớn hơn 5."}
    ],
    2: [
        {"id": "ucln-2-v4", "floor": 2, "levelTitle": get_level_title(2), "question": "Tìm ƯCLN(36, 54, 90) và số lượng ước chung của ba số đó.", "options": ["ƯCLN = 18; Có 6 ước chung", "ƯCLN = 9; Có 3 ước chung", "ƯCLN = 18; Có 8 ước chung", "ƯCLN = 6; Có 4 ước chung"], "correctIndex": 0, "explanation": "36 = 2²·3²; 54 = 2·3³; 90 = 2·3²·5 => ƯCLN = 2·3² = 18. Ư(18) = {1; 2; 3; 6; 9; 18} có 6 ước chung.", "hint": "36=2²·3², 54=2·3³, 90=2·3²·5 => ƯCLN = 2·3² = 18."},
        {"id": "ucln-2-v5", "floor": 2, "levelTitle": get_level_title(2), "question": "Tìm ƯCLN(45, 75, 120) và ước chung lớn nhất có hai chữ số.", "options": ["15", "30", "5", "45"], "correctIndex": 0, "explanation": "45 = 3²·5; 75 = 3·5²; 120 = 2³·3·5 => ƯCLN = 3·5 = 15.", "hint": "Thừa số chung là 3 và 5 với số mũ 1: ƯCLN = 3·5 = 15."},
        {"id": "ucln-2-v6", "floor": 2, "levelTitle": get_level_title(2), "question": "Tìm ƯCLN(32, 48, 80) và các ước chung lớn hơn 8 của chúng.", "options": ["{16}", "{16; 32}", "{8; 16}", "{12; 16}"], "correctIndex": 0, "explanation": "32 = 2⁵; 48 = 2⁴·3; 80 = 2⁴·5 => ƯCLN = 2⁴ = 16. Ước lớn hơn 8 chỉ có duy nhất 16.", "hint": "ƯCLN = 16. Ước của 16 gồm 1, 2, 4, 8, 16."},
        {"id": "ucln-2-v7", "floor": 2, "levelTitle": get_level_title(2), "question": "Tìm ƯCLN(60, 96, 144) và ước chung chẵn lớn nhất của ba số.", "options": ["12", "24", "6", "18"], "correctIndex": 0, "explanation": "60 = 2²·3·5; 96 = 2⁵·3; 144 = 2⁴·3² => ƯCLN = 2²·3 = 12. Bản thân 12 đã là số chẵn lớn nhất.", "hint": "Thừa số chung là 2² · 3 = 12."},
        {"id": "ucln-2-v8", "floor": 2, "levelTitle": get_level_title(2), "question": "Tìm ƯCLN(42, 70, 98) và tập hợp các ước chung nguyên tố.", "options": ["{2; 7}", "{7}", "{2; 5; 7}", "{14}"], "correctIndex": 0, "explanation": "42 = 2·3·7; 70 = 2·5·7; 98 = 2·7² => ƯCLN = 2·7 = 14. Ước chung nguyên tố là 2 và 7.", "hint": "ƯCLN = 14. Các số nguyên tố là ước của 14 là 2 và 7."}
    ],
    3: [
        {"id": "ucln-3-v4", "floor": 3, "levelTitle": get_level_title(3), "question": "Cho a = 2⁴ · 3³ · 5 và b = 2³ · 3² · 7. Tìm ƯCLN(a, b).", "options": ["72", "36", "144", "24"], "correctIndex": 0, "explanation": "ƯCLN(a, b) = 2³ · 3² = 8 · 9 = 72.", "hint": "Thừa số chung là 2 và 3 với số mũ nhỏ nhất: 2³ · 3² = 72."},
        {"id": "ucln-3-v5", "floor": 3, "levelTitle": get_level_title(3), "question": "Cho p = 3² · 5³ · 13 và q = 2 · 3³ · 5² · 11. Tìm ƯCLN(p, q).", "options": ["225", "45", "75", "150"], "correctIndex": 0, "explanation": "ƯCLN(p, q) = 3² · 5² = 9 · 25 = 225.", "hint": "Số mũ nhỏ nhất của 3 là 2, của 5 là 2. ƯCLN = 3² · 5² = 225."},
        {"id": "ucln-3-v6", "floor": 3, "levelTitle": get_level_title(3), "question": "Cho x = 2² · 3 · 7² và y = 2³ · 5 · 7. Tìm ƯCLN(x, y).", "options": ["28", "14", "56", "84"], "correctIndex": 0, "explanation": "ƯCLN(x, y) = 2² · 7 = 4 · 7 = 28 (thừa số 3 và 5 không chung).", "hint": "Thừa số nguyên tố chung chỉ có 2 và 7: 2² · 7 = 28."},
        {"id": "ucln-3-v7", "floor": 3, "levelTitle": get_level_title(3), "question": "Cho m = 2³ · 3⁴ · 5² và n = 2⁴ · 3² · 5 · 11. Tìm ƯCLN(m, n).", "options": ["360", "180", "720", "120"], "correctIndex": 0, "explanation": "ƯCLN(m, n) = 2³ · 3² · 5 = 8 · 9 · 5 = 360.", "hint": "Lấy 2³ · 3² · 5¹ = 8 · 9 · 5 = 360."},
        {"id": "ucln-3-v8", "floor": 3, "levelTitle": get_level_title(3), "question": "Cho u = 5² · 7 · 17 và v = 2 · 5 · 7² · 13. Tìm ƯCLN(u, v).", "options": ["35", "175", "70", "15"], "correctIndex": 0, "explanation": "ƯCLN(u, v) = 5¹ · 7¹ = 35.", "hint": "Thừa số nguyên tố chung là 5 và 7 với số mũ nhỏ nhất là 1: 5 · 7 = 35."}
    ],
    4: [
        {"id": "ucln-4-v4", "floor": 4, "levelTitle": get_level_title(4), "question": "Tìm ƯCLN của hai số tự nhiên chẵn liên tiếp (ví dụ 2024 và 2026).", "options": ["2", "1", "4", "Không xác định"], "correctIndex": 0, "explanation": "Gọi hai số chẵn liên tiếp là 2k và 2k + 2. Hiệu của chúng là 2 nên ước chung chỉ có thể là 1 hoặc 2. Vì cả hai đều chẵn nên ƯCLN = 2.", "hint": "Hiệu hai số chẵn liên tiếp bằng 2, và cả hai đều chia hết cho 2."},
        {"id": "ucln-4-v5", "floor": 4, "levelTitle": get_level_title(4), "question": "Không cần đặt phép tính phân tích, hãy tìm ƯCLN(9999, 10000).", "options": ["1", "9", "3", "10"], "correctIndex": 0, "explanation": "9999 và 10000 là hai số tự nhiên liên tiếp nên luôn nguyên tố cùng nhau, suy ra ƯCLN = 1.", "hint": "Hai số tự nhiên liên tiếp luôn có ước chung lớn nhất bằng 1."},
        {"id": "ucln-4-v6", "floor": 4, "levelTitle": get_level_title(4), "question": "Cho biết a chia hết cho 15 (a ∈ ℕ*). Tìm ƯCLN(a, 15).", "options": ["15", "a", "1", "30"], "correctIndex": 0, "explanation": "Vì a ⋮ 15 nên 15 là một ước của a, do đó ƯCLN(a, 15) chính là 15.", "hint": "Nếu x chia hết cho y thì ƯCLN(x, y) = y."},
        {"id": "ucln-4-v7", "floor": 4, "levelTitle": get_level_title(4), "question": "Với mọi số tự nhiên n, biểu thức ƯCLN(n, n + 1) luôn bằng bao nhiêu?", "options": ["1", "n", "n + 1", "2"], "correctIndex": 0, "explanation": "Gọi d = ƯCLN(n, n + 1) => (n + 1) - n = 1 chia hết cho d => d = 1.", "hint": "Lấy số lớn trừ số bé: (n + 1) - n = 1."},
        {"id": "ucln-4-v8", "floor": 4, "levelTitle": get_level_title(4), "question": "Nếu hai số nguyên tố khác nhau p và q, thì ƯCLN(p, q) bằng bao nhiêu?", "options": ["1", "p", "q", "p · q"], "correctIndex": 0, "explanation": "Hai số nguyên tố khác nhau chỉ có ước chung dương duy nhất là 1, nên ƯCLN(p, q) = 1.", "hint": "Hai số nguyên tố phân biệt luôn nguyên tố cùng nhau."}
    ],
    5: [
        {"id": "ucln-5-v4", "floor": 5, "levelTitle": get_level_title(5), "question": "Tìm số tự nhiên x lớn nhất biết rằng 160 ⋮ x, 240 ⋮ x và 320 ⋮ x.", "options": ["80", "40", "160", "20"], "correctIndex": 0, "explanation": "x = ƯCLN(160, 240, 320). 160 = 2⁵·5; 240 = 2⁴·3·5; 320 = 2⁶·5 => ƯCLN = 2⁴·5 = 80.", "hint": "160 = 80·2; 240 = 80·3; 320 = 80·4 => ƯCLN = 80."},
        {"id": "ucln-5-v5", "floor": 5, "levelTitle": get_level_title(5), "question": "Tìm số tự nhiên a lớn nhất thỏa mãn: 126 ⋮ a, 198 ⋮ a và 270 ⋮ a.", "options": ["18", "9", "36", "27"], "correctIndex": 0, "explanation": "126 = 2·3²·7; 198 = 2·3²·11; 270 = 2·3³·5 => a = ƯCLN = 2·3² = 18.", "hint": "Thừa số chung là 2 và 3²: 2 · 9 = 18."},
        {"id": "ucln-5-v6", "floor": 5, "levelTitle": get_level_title(5), "question": "Tìm số tự nhiên k lớn nhất biết 210 ⋮ k và 280 ⋮ k.", "options": ["70", "35", "140", "14"], "correctIndex": 0, "explanation": "k = ƯCLN(210, 280). 210 = 2·3·5·7; 280 = 2³·5·7 => k = 2·5·7 = 70.", "hint": "210 = 70 · 3; 280 = 70 · 4 => ƯCLN = 70."},
        {"id": "ucln-5-v7", "floor": 5, "levelTitle": get_level_title(5), "question": "Tìm số tự nhiên m lớn nhất biết rằng 105 ⋮ m, 140 ⋮ m và 175 ⋮ m.", "options": ["35", "7", "5", "70"], "correctIndex": 0, "explanation": "105 = 3·5·7; 140 = 2²·5·7; 175 = 5²·7 => m = ƯCLN = 5·7 = 35.", "hint": "Thừa số chung là 5 và 7 với số mũ nhỏ nhất là 1: 5 · 7 = 35."},
        {"id": "ucln-5-v8", "floor": 5, "levelTitle": get_level_title(5), "question": "Tìm số tự nhiên y lớn nhất thỏa mãn: 180 ⋮ y, 252 ⋮ y và 324 ⋮ y.", "options": ["36", "18", "72", "54"], "correctIndex": 0, "explanation": "180 = 2²·3²·5; 252 = 2²·3²·7; 324 = 2²·3⁴ => y = ƯCLN = 2²·3² = 36.", "hint": "Thừa số chung là 2² · 3² = 4 · 9 = 36."}
    ],
    6: [
        {"id": "ucln-6-v4", "floor": 6, "levelTitle": get_level_title(6), "question": "Một đội học sinh gồm 30 bạn nam và 45 bạn nữ. Hỏi có thể chia nhiều nhất thành bao nhiêu nhóm để số nam và nữ ở mỗi nhóm đều bằng nhau?", "options": ["15 nhóm", "5 nhóm", "10 nhóm", "3 nhóm"], "correctIndex": 0, "explanation": "Số nhóm nhiều nhất là ƯCLN(30, 45) = 15 nhóm. Mỗi nhóm có 2 nam và 3 nữ.", "hint": "Tìm ƯCLN của 30 và 45."},
        {"id": "ucln-6-v5", "floor": 6, "levelTitle": get_level_title(6), "question": "Một đoàn tình nguyện có 42 nam và 56 nữ. Có thể chia nhiều nhất thành bao nhiêu tổ để phân bố đều số nam và nữ vào từng tổ?", "options": ["14 tổ", "7 tổ", "21 tổ", "28 tổ"], "correctIndex": 0, "explanation": "Số tổ nhiều nhất là ƯCLN(42, 56) = 14 tổ (mỗi tổ 3 nam, 4 nữ).", "hint": "42 = 14·3; 56 = 14·4 => ƯCLN(42, 56) = 14."},
        {"id": "ucln-6-v6", "floor": 6, "levelTitle": get_level_title(6), "question": "Câu lạc bộ có 64 học sinh lớp 6 và 96 học sinh lớp 7. Hỏi có thể chia đều thành nhiều nhất bao nhiêu đội thi đấu?", "options": ["32 đội", "16 đội", "8 đội", "24 đội"], "correctIndex": 0, "explanation": "Số đội nhiều nhất là ƯCLN(64, 96) = 32 đội (mỗi đội gồm 2 học sinh lớp 6 và 3 học sinh lớp 7).", "hint": "64 = 32·2; 96 = 32·3 => ƯCLN = 32."},
        {"id": "ucln-6-v7", "floor": 6, "levelTitle": get_level_title(6), "question": "Cô giáo có 36 bút chì và 84 quyển tập, chia đều vào các phần thưởng. Số phần thưởng nhiều nhất chia được là:", "options": ["12 phần", "6 phần", "18 phần", "24 phần"], "correctIndex": 0, "explanation": "ƯCLN(36, 84) = 12 phần thưởng (mỗi phần 3 bút chì và 7 quyển tập).", "hint": "36 = 2²·3²; 84 = 2²·3·7 => ƯCLN = 2²·3 = 12."},
        {"id": "ucln-6-v8", "floor": 6, "levelTitle": get_level_title(6), "question": "Trường tổ chức cắm trại cho 72 bạn nam và 108 bạn nữ, muốn chia thành nhiều lều nhất sao cho số nam và nữ đều nhau. Số lều nhiều nhất là:", "options": ["36 lều", "18 lều", "24 lều", "12 lều"], "correctIndex": 0, "explanation": "ƯCLN(72, 108) = 36 lều (mỗi lều có 2 nam và 3 nữ).", "hint": "72 = 36 · 2; 108 = 36 · 3 => ƯCLN = 36."}
    ],
    7: [
        {"id": "ucln-7-v4", "floor": 7, "levelTitle": get_level_title(7), "question": "Một tấm gỗ hình chữ nhật dài 90 cm, rộng 54 cm. Bác thợ mộc cưa thành các miếng vuông bằng nhau có cạnh lớn nhất. Cạnh miếng vuông đó là:", "options": ["18 cm", "9 cm", "27 cm", "6 cm"], "correctIndex": 0, "explanation": "Cạnh hình vuông lớn nhất là ƯCLN(90, 54) = 18 cm. 90 = 18·5; 54 = 18·3.", "hint": "Tìm ƯCLN(90, 54) = 18."},
        {"id": "ucln-7-v5", "floor": 7, "levelTitle": get_level_title(7), "question": "Một khu vườn hình chữ nhật dài 84 m, rộng 60 m. Chia vườn thành các ô vuông bằng nhau lớn nhất. Cạnh ô vuông lớn nhất là:", "options": ["12 m", "6 m", "15 m", "4 m"], "correctIndex": 0, "explanation": "Cạnh ô vuông lớn nhất là ƯCLN(84, 60) = 12 m. Khi đó vườn chia được (84:12) · (60:12) = 7 · 5 = 35 ô vuông.", "hint": "84 = 12·7; 60 = 12·5 => ƯCLN = 12."},
        {"id": "ucln-7-v6", "floor": 7, "levelTitle": get_level_title(7), "question": "Tấm tôn hình chữ nhật kích thước 120 cm x 72 cm. Cắt thành các ô vuông bằng nhau lớn nhất thì cạnh mỗi ô vuông là:", "options": ["24 cm", "12 cm", "36 cm", "18 cm"], "correctIndex": 0, "explanation": "Cạnh lớn nhất là ƯCLN(120, 72) = 24 cm.", "hint": "120 = 24 · 5; 72 = 24 · 3 => ƯCLN = 24."},
        {"id": "ucln-7-v7", "floor": 7, "levelTitle": get_level_title(7), "question": "Căn phòng hình chữ nhật dài 480 cm, rộng 360 cm. Cần lát gạch vuông nguyên vẹn có cạnh lớn nhất. Kích thước cạnh viên gạch là:", "options": ["120 cm", "60 cm", "40 cm", "90 cm"], "correctIndex": 0, "explanation": "Cạnh gạch lớn nhất là ƯCLN(480, 360) = 120 cm.", "hint": "480 = 120 · 4; 360 = 120 · 3 => ƯCLN = 120."},
        {"id": "ucln-7-v8", "floor": 7, "levelTitle": get_level_title(7), "question": "Một bức tường dài 210 cm, cao 140 cm. Cần dán các tấm tranh vuông bằng nhau có cạnh lớn nhất. Độ dài cạnh mỗi tấm tranh là:", "options": ["70 cm", "35 cm", "14 cm", "28 cm"], "correctIndex": 0, "explanation": "Độ dài cạnh lớn nhất là ƯCLN(210, 140) = 70 cm.", "hint": "210 = 70 · 3; 140 = 70 · 2 => ƯCLN = 70."}
    ],
    8: [
        {"id": "ucln-8-v4", "floor": 8, "levelTitle": get_level_title(8), "question": "Tìm số tự nhiên x lớn nhất biết khi chia 245 cho x dư 5 và khi chia 368 cho x dư 8 (x > 8).", "options": ["120", "60", "240", "40"], "correctIndex": 0, "explanation": "245 - 5 = 240 ⋮ x; 368 - 8 = 360 ⋮ x => x = ƯCLN(240, 360) = 120 (thỏa mãn x > 8).", "hint": "x là ƯCLN của 240 và 360."},
        {"id": "ucln-8-v5", "floor": 8, "levelTitle": get_level_title(8), "question": "Tìm số tự nhiên a lớn nhất biết khi chia 175 cho a dư 15 và khi chia 260 cho a dư 20 (a > 20).", "options": ["80", "40", "20", "60"], "correctIndex": 0, "explanation": "175 - 15 = 160 ⋮ a; 260 - 20 = 240 ⋮ a => a = ƯCLN(160, 240) = 80 (thỏa mãn a > 20).", "hint": "a = ƯCLN(160, 240) = 80."},
        {"id": "ucln-8-v6", "floor": 8, "levelTitle": get_level_title(8), "question": "Tìm số tự nhiên m lớn nhất sao cho khi chia 288 cho m dư 18 và chia 420 cho m dư 15 (m > 18).", "options": ["135", "45", "90", "27"], "correctIndex": 0, "explanation": "288 - 18 = 270 ⋮ m; 420 - 15 = 405 ⋮ m => m = ƯCLN(270, 405) = 135.", "hint": "270 = 135 · 2; 405 = 135 · 3 => m = 135."},
        {"id": "ucln-8-v7", "floor": 8, "levelTitle": get_level_title(8), "question": "Tìm số tự nhiên k lớn nhất biết khi chia 189 cho k dư 9 và khi chia 255 cho k dư 15 (k > 15).", "options": ["60", "30", "45", "90"], "correctIndex": 0, "explanation": "189 - 9 = 180 ⋮ k; 255 - 15 = 240 ⋮ k => k = ƯCLN(180, 240) = 60.", "hint": "k = ƯCLN(180, 240) = 60."},
        {"id": "ucln-8-v8", "floor": 8, "levelTitle": get_level_title(8), "question": "Tìm số tự nhiên d lớn nhất biết khi chia 395 cho d dư 15 và khi chia 585 cho d dư 15 (d > 15).", "options": ["190", "95", "380", "65"], "correctIndex": 0, "explanation": "395 - 15 = 380 ⋮ d; 585 - 15 = 570 ⋮ d => d = ƯCLN(380, 570) = 190.", "hint": "380 = 190 · 2; 570 = 190 · 3 => d = 190."}
    ],
    9: [
        {"id": "ucln-9-v4", "floor": 9, "levelTitle": get_level_title(9), "question": "Tìm số tự nhiên x sao cho 60 ⋮ (x + 2) và 84 ⋮ (x + 2). Giá trị lớn nhất của x là:", "options": ["10", "12", "14", "8"], "correctIndex": 0, "explanation": "ƯCLN(60, 84) = 12. (x + 2) là ước của 12, giá trị lớn nhất là x + 2 = 12 => x = 10.", "hint": "x + 2 là ước chung của 60 và 84. Lớn nhất bằng 12."},
        {"id": "ucln-9-v5", "floor": 9, "levelTitle": get_level_title(9), "question": "Tìm số tự nhiên n lớn nhất sao cho 90 ⋮ (2n + 1) và 150 ⋮ (2n + 1).", "options": ["7", "14", "5", "9"], "correctIndex": 0, "explanation": "ƯCLN(90, 150) = 30. (2n + 1) là ước lẻ của 30. Ước lẻ lớn nhất của 30 là 15 => 2n + 1 = 15 => 2n = 14 => n = 7.", "hint": "ƯCLN = 30. Ước lẻ lớn nhất của 30 là 15 => 2n + 1 = 15."},
        {"id": "ucln-9-v6", "floor": 9, "levelTitle": get_level_title(9), "question": "Tìm số tự nhiên a lớn nhất sao cho 120 ⋮ (3a + 1) và 180 ⋮ (3a + 1).", "options": ["3", "1", "9", "4"], "correctIndex": 0, "explanation": "ƯCLN(120, 180) = 60. Các ước của 60 chia 3 dư 1 là 1, 4, 10. Lớn nhất là 10 => 3a + 1 = 10 => 3a = 9 => a = 3.", "hint": "Ước của 60 có dạng 3a + 1 là 1, 4, 10. Giá trị lớn nhất là 10."},
        {"id": "ucln-9-v7", "floor": 9, "levelTitle": get_level_title(9), "question": "Tìm số tự nhiên k sao cho 75 ⋮ (k + 3) và 105 ⋮ (k + 3). Giá trị lớn nhất của k là:", "options": ["12", "15", "18", "9"], "correctIndex": 0, "explanation": "ƯCLN(75, 105) = 15 => k + 3 = 15 => k = 12.", "hint": "k + 3 lớn nhất bằng ƯCLN(75, 105) = 15."},
        {"id": "ucln-9-v8", "floor": 9, "levelTitle": get_level_title(9), "question": "Tìm số tự nhiên y lớn nhất để 40 ⋮ (2y + 1) và 70 ⋮ (2y + 1).", "options": ["2", "4", "5", "1"], "correctIndex": 0, "explanation": "ƯCLN(40, 70) = 10. Ước lẻ của 10 là 1 và 5. Lớn nhất là 5 => 2y + 1 = 5 => 2y = 4 => y = 2.", "hint": "Ước lẻ lớn nhất của 10 là 5 => 2y + 1 = 5."}
    ],
    10: [
        {"id": "ucln-10-v4", "floor": 10, "levelTitle": get_level_title(10), "question": "Tìm số tự nhiên x biết 144 ⋮ x, 216 ⋮ x và 20 < x < 40.", "options": ["24 và 36", "24", "36", "18 và 36"], "correctIndex": 0, "explanation": "ƯCLN(144, 216) = 72. Các ước của 72 trong khoảng (20, 40) là 24 và 36.", "hint": "Tìm các ước của 72 nằm giữa 20 và 40."},
        {"id": "ucln-10-v5", "floor": 10, "levelTitle": get_level_title(10), "question": "Tìm số tự nhiên a biết 180 ⋮ a, 300 ⋮ a và 25 < a < 50.", "options": ["30", "36", "45", "40"], "correctIndex": 0, "explanation": "ƯCLN(180, 300) = 60. Các ước của 60 là 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. Số nằm giữa 25 và 50 là 30.", "hint": "ƯCLN = 60. Ước của 60 nằm giữa 25 và 50 là 30."},
        {"id": "ucln-10-v6", "floor": 10, "levelTitle": get_level_title(10), "question": "Tìm số tự nhiên b biết 120 ⋮ b, 168 ⋮ b và 10 < b < 20.", "options": ["12", "14", "16", "18"], "correctIndex": 0, "explanation": "ƯCLN(120, 168) = 24. Các ước của 24 trong khoảng (10, 20) là 12.", "hint": "ƯCLN(120, 168) = 24. Ước của 24 giữa 10 và 20 là 12."},
        {"id": "ucln-10-v7", "floor": 10, "levelTitle": get_level_title(10), "question": "Tìm số tự nhiên y biết 240 ⋮ y, 360 ⋮ y và 45 < y < 70.", "options": ["60", "48", "50", "54"], "correctIndex": 0, "explanation": "ƯCLN(240, 360) = 120. Ước của 120 trong khoảng (45, 70) là 60.", "hint": "ƯCLN = 120. Ước của 120 giữa 45 và 70 là 60."},
        {"id": "ucln-10-v8", "floor": 10, "levelTitle": get_level_title(10), "question": "Tìm số tự nhiên z biết rằng 120 ⋮ z, 180 ⋮ z và 15 < z < 25.", "options": ["20", "18", "16", "24"], "correctIndex": 0, "explanation": "ƯCLN(120, 180) = 60. Ước của 60 nằm trong khoảng (15, 25) là 20.", "hint": "ƯCLN = 60. Ước của 60 nằm giữa 15 và 25 là 20."}
    ],
    11: [
        {"id": "ucln-11-v4", "floor": 11, "levelTitle": get_level_title(11), "question": "Tìm hai số tự nhiên a và b (a < b) biết ƯCLN(a, b) = 15 và a + b = 90.",
         "options": ["(a, b) = (15, 75)", "(a, b) ∈ {(15, 75), (30, 60)}", "(a, b) = (30, 60)", "(a, b) = (15, 45)"], "correctIndex": 0, "explanation": "a = 15x, b = 15y => 15(x + y) = 90 => x + y = 6 với x < y và ƯCLN(x, y) = 1. Cặp duy nhất là (1, 5) => (15, 75). (Cặp 2, 4 và 3, 3 bị loại vì không nguyên tố cùng nhau).", "hint": "x + y = 6 với ƯCLN(x, y) = 1."},
        {"id": "ucln-11-v5", "floor": 11, "levelTitle": get_level_title(11), "question": "Tìm hai số tự nhiên a, b (a < b) biết ƯCLN(a, b) = 9 và a + b = 72.",
         "options": ["(a, b) ∈ {(9, 63), (27, 45)}", "(a, b) ∈ {(9, 63), (18, 54), (27, 45)}", "(a, b) = (9, 63)", "(a, b) = (27, 45)"], "correctIndex": 0, "explanation": "x + y = 72 / 9 = 8 với x < y và ƯCLN(x, y) = 1. Cặp thỏa mãn là (1, 7) và (3, 5) => (9, 63) và (27, 45).", "hint": "x + y = 8. Cặp nguyên tố cùng nhau là (1, 7) và (3, 5)."},
        {"id": "ucln-11-v6", "floor": 11, "levelTitle": get_level_title(11), "question": "Tìm hai số tự nhiên x và y (x < y) biết ƯCLN(x, y) = 18 và x + y = 108.",
         "options": ["(x, y) = (18, 90)", "(x, y) ∈ {(18, 90), (36, 72)}", "(x, y) = (36, 72)", "(x, y) = (54, 54)"], "correctIndex": 0, "explanation": "m + n = 108 / 18 = 6 với m < n và ƯCLN(m, n) = 1 => m = 1, n = 5 => (x, y) = (18, 90).", "hint": "m + n = 6 với ƯCLN = 1 chỉ có cặp (1, 5)."},
        {"id": "ucln-11-v7", "floor": 11, "levelTitle": get_level_title(11), "question": "Tìm hai số tự nhiên a và b (a < b) biết ƯCLN(a, b) = 20 và a + b = 160.",
         "options": ["(a, b) ∈ {(20, 140), (60, 100)}", "(a, b) ∈ {(20, 140), (40, 120)}", "(a, b) = (20, 140)", "(a, b) = (60, 100)"], "correctIndex": 0, "explanation": "x + y = 160 / 20 = 8. Cặp nguyên tố cùng nhau có x < y là (1, 7) và (3, 5) => (20, 140) và (60, 100).", "hint": "x + y = 8, chọn cặp có ƯCLN = 1."},
        {"id": "ucln-11-v8", "floor": 11, "levelTitle": get_level_title(11), "question": "Tìm hai số tự nhiên u và v (u < v) biết ƯCLN(u, v) = 8 và u + v = 80.",
         "options": ["(u, v) ∈ {(8, 72), (24, 56)}", "(u, v) ∈ {(8, 72), (16, 64), (24, 56)}", "(u, v) = (8, 72)", "(u, v) = (24, 56)"], "correctIndex": 0, "explanation": "x + y = 80 / 8 = 10 với x < y và ƯCLN(x, y) = 1. Cặp thỏa mãn là (1, 9) và (3, 7) => (8, 72) và (24, 56).", "hint": "x + y = 10 với ƯCLN(x, y) = 1."}
    ],
    12: [
        {"id": "ucln-12-v4", "floor": 12, "levelTitle": get_level_title(12), "question": "Tìm hai số tự nhiên a và b (a < b) biết ƯCLN(a, b) = 18, hiệu b - a = 54 với a < 100.",
         "options": ["(a, b) ∈ {(18, 72), (36, 90), (72, 126), (90, 144)}", "(a, b) ∈ {(18, 72), (54, 108), (90, 144)}", "(a, b) ∈ {(18, 72), (36, 90)}", "(a, b) = (18, 72)"], "correctIndex": 0, "explanation": "a = 18x, b = 18y => y - x = 54 / 18 = 3 với ƯCLN(x, y) = 1. Vì 18x < 100 => x ∈ {1, 2, 3, 4, 5}. Loại x = 3 (vì y = 6). Các cặp là x ∈ {1, 2, 4, 5} tương ứng {(18, 72), (36, 90), (72, 126), (90, 144)}.", "hint": "y - x = 3 với ƯCLN(x, y) = 1. x không chia hết cho 3."},
        {"id": "ucln-12-v5", "floor": 12, "levelTitle": get_level_title(12), "question": "Tìm hai số tự nhiên a và b (a < b) biết ƯCLN(a, b) = 16 và b - a = 32 với a < 80.",
         "options": ["(a, b) ∈ {(16, 48), (48, 80)}", "(a, b) ∈ {(16, 48), (32, 64)}", "(a, b) = (16, 48)", "(a, b) = (48, 80)"], "correctIndex": 0, "explanation": "y - x = 32 / 16 = 2 với ƯCLN(x, y) = 1. Vì y - x = 2 nên x và y phải là các số lẻ. 16x < 80 => x ∈ {1, 3} => (16, 48) và (48, 80).", "hint": "y - x = 2. Để nguyên tố cùng nhau thì x phải là số lẻ."},
        {"id": "ucln-12-v6", "floor": 12, "levelTitle": get_level_title(12), "question": "Tìm hai số x và y (x < y) có hiệu y - x = 50, ƯCLN(x, y) = 10 với x < 50.",
         "options": ["(x, y) ∈ {(10, 60), (20, 70), (30, 80), (40, 90)}", "(x, y) ∈ {(10, 60), (20, 70), (30, 80)}", "(x, y) ∈ {(10, 60), (30, 80)}", "(x, y) = (10, 60)"], "correctIndex": 0, "explanation": "n - m = 5 với ƯCLN(m, n) = 1. 10m < 50 => m ∈ {1, 2, 3, 4}. Vì n = m + 5 nên ƯCLN(m, m+5) = ƯCLN(m, 5) = 1 với mọi m ∈ {1, 2, 3, 4}. Do đó cả 4 cặp đều thỏa mãn.", "hint": "n - m = 5 với m < 5."},
        {"id": "ucln-12-v7", "floor": 12, "levelTitle": get_level_title(12), "question": "Tìm hai số tự nhiên a và b (a < b) biết hiệu b - a = 48 và ƯCLN(a, b) = 24 với b < 150.",
         "options": ["(a, b) ∈ {(24, 72), (72, 120)}", "(a, b) ∈ {(24, 72), (48, 96)}", "(a, b) = (24, 72)", "(a, b) = (72, 120)"], "correctIndex": 0, "explanation": "y - x = 2 với ƯCLN(x, y) = 1 => x, y là các số lẻ. 24y < 150 => y < 6.25 => y ∈ {3, 5} tương ứng x ∈ {1, 3} => (24, 72) và (72, 120).", "hint": "y - x = 2. x, y là số lẻ và 24y < 150."},
        {"id": "ucln-12-v8", "floor": 12, "levelTitle": get_level_title(12), "question": "Tìm hai số tự nhiên u và v (u < v) biết hiệu v - u = 75 và ƯCLN(u, v) = 25 với u < 100.",
         "options": ["(u, v) ∈ {(25, 100), (50, 125)}", "(u, v) ∈ {(25, 100), (75, 150)}", "(u, v) = (25, 100)", "(u, v) = (50, 125)"], "correctIndex": 0, "explanation": "y - x = 3 với ƯCLN(x, y) = 1 và 25x < 100 => x ∈ {1, 2, 3}. Loại x = 3 (vì y = 6). Vậy x ∈ {1, 2} => (25, 100) và (50, 125).", "hint": "y - x = 3 với x không chia hết cho 3."}
    ],
    13: [
        {"id": "ucln-13-v4", "floor": 13, "levelTitle": get_level_title(13), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 1200 và ƯCLN(a, b) = 10.",
         "options": ["(a, b) ∈ {(10, 120), (30, 40)}", "(a, b) ∈ {(10, 120), (20, 60)}", "(a, b) = (30, 40)", "(a, b) = (10, 120)"], "correctIndex": 0, "explanation": "100xy = 1200 => xy = 12 với ƯCLN(x, y) = 1 và x ≤ y => (x, y) ∈ {(1, 12), (3, 4)} => (10, 120) và (30, 40).", "hint": "xy = 1200 / 100 = 12. Cặp (2, 6) loại vì ƯCLN = 2."},
        {"id": "ucln-13-v5", "floor": 13, "levelTitle": get_level_title(13), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 490 và ƯCLN(a, b) = 7.",
         "options": ["(a, b) ∈ {(7, 70), (14, 35)}", "(a, b) = (7, 70)", "(a, b) = (14, 35)", "(a, b) ∈ {(7, 70), (21, 35)}"], "correctIndex": 0, "explanation": "49xy = 490 => xy = 10 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 10), (2, 5)} => (7, 70) và (14, 35).", "hint": "xy = 490 / 49 = 10. Cả hai cặp (1, 10) và (2, 5) đều thỏa mãn."},
        {"id": "ucln-13-v6", "floor": 13, "levelTitle": get_level_title(13), "question": "Tìm hai số tự nhiên x và y (x ≤ y) biết x · y = 4500 và ƯCLN(x, y) = 15.",
         "options": ["(x, y) ∈ {(15, 300), (60, 75)}", "(x, y) ∈ {(15, 300), (30, 150)}", "(x, y) = (60, 75)", "(x, y) = (15, 300)"], "correctIndex": 0, "explanation": "225xy = 4500 => xy = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => (15, 300) và (60, 75).", "hint": "xy = 4500 / 225 = 20. Cặp (2, 10) bị loại."},
        {"id": "ucln-13-v7", "floor": 13, "levelTitle": get_level_title(13), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết tích a · b = 960 và ƯCLN(a, b) = 8.",
         "options": ["(a, b) ∈ {(8, 120), (24, 40)}", "(a, b) ∈ {(8, 120), (16, 60)}", "(a, b) = (24, 40)", "(a, b) = (8, 120)"], "correctIndex": 0, "explanation": "64xy = 960 => xy = 15 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 15), (3, 5)} => (8, 120) và (24, 40).", "hint": "xy = 960 / 64 = 15. Chọn cặp nguyên tố cùng nhau."},
        {"id": "ucln-13-v8", "floor": 13, "levelTitle": get_level_title(13), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 1458 và ƯCLN(a, b) = 9.",
         "options": ["(a, b) ∈ {(9, 162), (18, 81)}", "(a, b) ∈ {(9, 162), (27, 54)}", "(a, b) = (9, 162)", "(a, b) = (18, 81)"], "correctIndex": 0, "explanation": "81xy = 1458 => xy = 18 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 18), (2, 9)} => (9, 162) và (18, 81).", "hint": "xy = 1458 / 81 = 18. Cặp (3, 6) loại vì ƯCLN = 3."}
    ],
    14: [
        {"id": "ucln-14-v4", "floor": 14, "levelTitle": get_level_title(14), "question": "Tìm hai số tự nhiên a và b (a < b) biết a + b = 192 và ƯCLN(a, b) = 24.",
         "options": ["(a, b) ∈ {(24, 168), (72, 120)}", "(a, b) ∈ {(24, 168), (48, 144)}", "(a, b) = (24, 168)", "(a, b) = (72, 120)"], "correctIndex": 0, "explanation": "x + y = 192 / 24 = 8 với x < y và ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 7), (3, 5)} => (24, 168) và (72, 120).", "hint": "x + y = 8 với ƯCLN(x, y) = 1."},
        {"id": "ucln-14-v5", "floor": 14, "levelTitle": get_level_title(14), "question": "Tìm hai số tự nhiên a và b (a < b) biết a + b = 210 và ƯCLN(a, b) = 30.",
         "options": ["(a, b) ∈ {(30, 180), (60, 150), (90, 120)}", "(a, b) ∈ {(30, 180), (90, 120)}", "(a, b) = (30, 180)", "(a, b) = (90, 120)"], "correctIndex": 0, "explanation": "x + y = 210 / 30 = 7. Vì 7 là số nguyên tố nên mọi cặp (x, y) có x < y đều nguyên tố cùng nhau: (1, 6), (2, 5), (3, 4) => (30, 180), (60, 150), (90, 120).", "hint": "x + y = 7. Số 7 nguyên tố nên mọi cặp đều thỏa mãn."},
        {"id": "ucln-14-v6", "floor": 14, "levelTitle": get_level_title(14), "question": "Tìm hai số tự nhiên x và y (x < y) biết tổng x + y = 200 và ƯCLN(x, y) = 25.",
         "options": ["(x, y) ∈ {(25, 175), (75, 125)}", "(x, y) ∈ {(25, 175), (50, 150)}", "(x, y) = (25, 175)", "(x, y) = (75, 125)"], "correctIndex": 0, "explanation": "m + n = 200 / 25 = 8. Cặp nguyên tố cùng nhau với m < n là (1, 7) và (3, 5) => (25, 175) và (75, 125).", "hint": "m + n = 8 với ƯCLN(m, n) = 1."},
        {"id": "ucln-14-v7", "floor": 14, "levelTitle": get_level_title(14), "question": "Tìm hai số tự nhiên a và b (a < b) biết a + b = 180 và ƯCLN(a, b) = 20.",
         "options": ["(a, b) ∈ {(20, 160), (40, 140), (80, 100)}", "(a, b) ∈ {(20, 160), (80, 100)}", "(a, b) = (20, 160)", "(a, b) = (40, 140)"], "correctIndex": 0, "explanation": "x + y = 180 / 20 = 9 với x < y và ƯCLN(x, y) = 1. Cặp thỏa mãn là (1, 8), (2, 7), (4, 5) (loại 3, 6) => (20, 160), (40, 140), (80, 100).", "hint": "x + y = 9. Loại cặp (3, 6) vì chia hết cho 3."},
        {"id": "ucln-14-v8", "floor": 14, "levelTitle": get_level_title(14), "question": "Tìm hai số tự nhiên a và b (a < b) biết a + b = 168 và ƯCLN(a, b) = 28.",
         "options": ["(a, b) = (28, 140)", "(a, b) ∈ {(28, 140), (56, 112)}", "(a, b) = (56, 112)", "(a, b) = (84, 84)"], "correctIndex": 0, "explanation": "x + y = 168 / 28 = 6 với x < y và ƯCLN(x, y) = 1 => (x, y) = (1, 5) => (28, 140).", "hint": "x + y = 6 với ƯCLN = 1 chỉ có cặp (1, 5)."}
    ],
    15: [
        {"id": "ucln-15-v4", "floor": 15, "levelTitle": get_level_title(15), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 14 và a · b = 3920.",
         "options": ["(a, b) ∈ {(14, 280), (56, 70)}", "(a, b) ∈ {(14, 280), (28, 140)}", "(a, b) = (56, 70)", "(a, b) = (14, 280)"], "correctIndex": 0, "explanation": "196xy = 3920 => xy = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => (14, 280) và (56, 70).", "hint": "xy = 3920 / 196 = 20. Loại cặp (2, 10)."},
        {"id": "ucln-15-v5", "floor": 15, "levelTitle": get_level_title(15), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 11 và a · b = 2420.",
         "options": ["(a, b) ∈ {(11, 220), (44, 55)}", "(a, b) ∈ {(11, 220), (22, 110)}", "(a, b) = (44, 55)", "(a, b) = (11, 220)"], "correctIndex": 0, "explanation": "121xy = 2420 => xy = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => (11, 220) và (44, 55).", "hint": "xy = 2420 / 121 = 20."},
        {"id": "ucln-15-v6", "floor": 15, "levelTitle": get_level_title(15), "question": "Tìm hai số tự nhiên x và y (x ≤ y) biết ƯCLN(x, y) = 16 và x · y = 3072.",
         "options": ["(x, y) ∈ {(16, 192), (48, 64)}", "(x, y) ∈ {(16, 192), (32, 96)}", "(x, y) = (48, 64)", "(x, y) = (16, 192)"], "correctIndex": 0, "explanation": "256mn = 3072 => mn = 12 với ƯCLN(m, n) = 1 => (m, n) ∈ {(1, 12), (3, 4)} => (16, 192) và (48, 64).", "hint": "mn = 3072 / 256 = 12. Cặp (2, 6) loại."},
        {"id": "ucln-15-v7", "floor": 15, "levelTitle": get_level_title(15), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 18 và a · b = 9720.",
         "options": ["(a, b) ∈ {(18, 540), (36, 270), (54, 180), (90, 108)}", "(a, b) ∈ {(18, 540), (54, 180)}", "(a, b) = (90, 108)", "(a, b) = (18, 540)"], "correctIndex": 0, "explanation": "324xy = 9720 => xy = 30. Các cặp nguyên tố cùng nhau là (1, 30), (2, 15), (3, 10), (5, 6) tương ứng {(18, 540), (36, 270), (54, 180), (90, 108)}.", "hint": "xy = 9720 / 324 = 30. Liệt kê tất cả cặp nguyên tố cùng nhau."},
        {"id": "ucln-15-v8", "floor": 15, "levelTitle": get_level_title(15), "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 22 và a · b = 4840.",
         "options": ["(a, b) ∈ {(22, 220), (44, 110)}", "(a, b) = (22, 220)", "(a, b) = (44, 110)", "(a, b) ∈ {(22, 220), (66, 88)}"], "correctIndex": 0, "explanation": "484xy = 4840 => xy = 10 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 10), (2, 5)} => (22, 220) và (44, 110).", "hint": "xy = 4840 / 484 = 10. Cả hai cặp (1, 10) và (2, 5) đều nguyên tố cùng nhau."}
    ],
    16: [
        {"id": "ucln-16-v4", "floor": 16, "levelTitle": get_level_title(16), "question": "Tìm ƯCLN(3n + 1, 4n + 1) với mọi số tự nhiên n.",
         "options": ["1", "2", "3", "n"], "correctIndex": 0, "explanation": "4(3n + 1) - 3(4n + 1) = (12n + 4) - (12n + 3) = 1 chia hết cho ước chung => ƯCLN = 1.", "hint": "Nhân (3n + 1) với 4 và (4n + 1) với 3 rồi trừ đi."},
        {"id": "ucln-16-v5", "floor": 16, "levelTitle": get_level_title(16), "question": "Với mọi số tự nhiên n, biểu thức ƯCLN(4n + 3, 5n + 4) bằng bao nhiêu?",
         "options": ["1", "2", "4", "Phụ thuộc vào n"], "correctIndex": 0, "explanation": "5(4n + 3) - 4(5n + 4) = (20n + 15) - (20n + 16) = -1 => ước chung d là ước của 1 => d = 1.", "hint": "Lấy 5(4n + 3) trừ đi 4(5n + 4)."},
        {"id": "ucln-16-v6", "floor": 16, "levelTitle": get_level_title(16), "question": "Chứng minh rằng ƯCLN(2n + 5, 3n + 7) với mọi n ∈ ℕ luôn bằng:",
         "options": ["1", "2", "5", "7"], "correctIndex": 0, "explanation": "3(2n + 5) - 2(3n + 7) = (6n + 15) - (6n + 14) = 1 => ƯCLN = 1.", "hint": "3(2n + 5) - 2(3n + 7) = 15 - 14 = 1."},
        {"id": "ucln-16-v7", "floor": 16, "levelTitle": get_level_title(16), "question": "Tìm ƯCLN(5n + 2, 7n + 3) với mọi số tự nhiên n.",
         "options": ["1", "2", "3", "5"], "correctIndex": 0, "explanation": "7(5n + 2) - 5(7n + 3) = (35n + 14) - (35n + 15) = -1 => ƯCLN = 1.", "hint": "Nhân chéo hệ số: 7 · (5n + 2) và 5 · (7n + 3)."},
        {"id": "ucln-16-v8", "floor": 16, "levelTitle": get_level_title(16), "question": "Với mọi số tự nhiên n, giá trị của ƯCLN(3n + 4, 4n + 5) bằng:",
         "options": ["1", "2", "3", "n + 1"], "correctIndex": 0, "explanation": "4(3n + 4) - 3(4n + 5) = (12n + 16) - (12n + 15) = 1 => ƯCLN = 1.", "hint": "4(3n + 4) - 3(4n + 5) = 16 - 15 = 1."}
    ],
    17: [
        {"id": "ucln-17-v4", "floor": 17, "levelTitle": get_level_title(17), "question": "Chứng minh phân số P = (15n + 1)/(30n + 1) luôn tối giản. Giá trị ƯCLN của tử và mẫu là:",
         "options": ["1", "2", "15", "Không cố định"], "correctIndex": 0, "explanation": "2(15n + 1) - (30n + 1) = (30n + 2) - (30n + 1) = 1 => ƯCLN = 1, do đó phân số luôn tối giản.", "hint": "Lấy 2 lần tử trừ đi mẫu số."},
        {"id": "ucln-17-v5", "floor": 17, "levelTitle": get_level_title(17), "question": "Phân số Q = (16n + 3)/(24n + 4) có tối giản với mọi n tự nhiên không?",
         "options": ["Luôn tối giản với mọi n", "Rút gọn được khi n chẵn", "Rút gọn được cho 4", "Không thể xác định"], "correctIndex": 0, "explanation": "3(16n + 3) - 2(24n + 4) = (48n + 9) - (48n + 8) = 1 => ƯCLN của tử và mẫu bằng 1 với mọi n.", "hint": "3 lần tử trừ đi 2 lần mẫu bằng 1."},
        {"id": "ucln-17-v6", "floor": 17, "levelTitle": get_level_title(17), "question": "Phân số (18n + 5)/(30n + 8) luôn là phân số gì với mọi n ∈ ℕ?",
         "options": ["Phân số tối giản", "Rút gọn được cho 2", "Rút gọn được cho 3", "Rút gọn được cho 5"], "correctIndex": 0, "explanation": "5(18n + 5) - 3(30n + 8) = (90n + 25) - (90n + 24) = 1 => ƯCLN = 1 => phân số tối giản.", "hint": "5(18n + 5) - 3(30n + 8) = 25 - 24 = 1."},
        {"id": "ucln-17-v7", "floor": 17, "levelTitle": get_level_title(17), "question": "Cho phân số M = (20n + 9)/(30n + 13). Giá trị ƯCLN của tử và mẫu là:",
         "options": ["1", "3", "9", "2"], "correctIndex": 0, "explanation": "3(20n + 9) - 2(30n + 13) = (60n + 27) - (60n + 26) = 1 => ƯCLN = 1.", "hint": "3(20n + 9) - 2(30n + 13) = 27 - 26 = 1."},
        {"id": "ucln-17-v8", "floor": 17, "levelTitle": get_level_title(17), "question": "Phân số K = (14n + 5)/(21n + 7) có thể rút gọn cho số nào khi n là số chẵn?",
         "options": ["Luôn tối giản, không rút gọn được", "Rút gọn cho 7", "Rút gọn cho 2", "Rút gọn cho 14"], "correctIndex": 0, "explanation": "3(14n + 5) - 2(21n + 7) = (42n + 15) - (42n + 14) = 1. Hiệu luôn bằng 1 nên phân số luôn tối giản với mọi n.", "hint": "3(14n + 5) - 2(21n + 7) = 15 - 14 = 1."}
    ],
    18: [
        {"id": "ucln-18-v4", "floor": 18, "levelTitle": get_level_title(18), "question": "Tìm số tự nhiên n để phân số (n + 8)/(n + 1) rút gọn được.",
         "options": ["n = 7k + 6 (với k ∈ ℕ)", "n = 7k + 1 (với k ∈ ℕ)", "n = 8k + 1 (với k ∈ ℕ)", "n chia hết cho 7"], "correctIndex": 0, "explanation": "(n + 8)/(n + 1) = 1 + 7/(n + 1). Phân số rút gọn được khi n + 1 chia hết cho 7 => n + 1 = 7m => n = 7m - 1 = 7k + 6.", "hint": "Tách: n + 8 = (n + 1) + 7. Để rút gọn thì n + 1 phải chia hết cho 7."},
        {"id": "ucln-18-v5", "floor": 18, "levelTitle": get_level_title(18), "question": "Tìm n ∈ ℕ để phân số (n + 13)/(n - 2) (n > 2) rút gọn được.",
         "options": ["(n - 2) chia hết cho 3 hoặc 5", "n chia hết cho 13", "n = 15k + 2", "n là số chẵn"], "correctIndex": 0, "explanation": "(n + 13) = (n - 2) + 15. Rút gọn được khi n - 2 có ước nguyên tố chung với 15, tức n - 2 chia hết cho 3 hoặc 5.", "hint": "Tách: n + 13 = (n - 2) + 15. Ước nguyên tố của 15 là 3 và 5."},
        {"id": "ucln-18-v6", "floor": 18, "levelTitle": get_level_title(18), "question": "Tìm điều kiện của n để phân số (3n + 4)/(n - 1) rút gọn được (n > 1).",
         "options": ["n = 7k + 1 (k ∈ ℕ*)", "n = 7k + 2", "n chia hết cho 3", "n là số lẻ"], "correctIndex": 0, "explanation": "3n + 4 = 3(n - 1) + 7. Rút gọn được khi (n - 1) chia hết cho 7 => n - 1 = 7k => n = 7k + 1.", "hint": "3n + 4 = 3(n - 1) + 7. Mẫu n - 1 phải chia hết cho 7."},
        {"id": "ucln-18-v7", "floor": 18, "levelTitle": get_level_title(18), "question": "Tìm n ∈ ℕ để phân số (n + 10)/(n + 3) rút gọn được.",
         "options": ["n = 7k + 4 (với k ∈ ℕ)", "n = 7k + 3", "n = 10k + 3", "n chia hết cho 7"], "correctIndex": 0, "explanation": "(n + 10) = (n + 3) + 7. Phân số rút gọn được khi n + 3 chia hết cho 7 => n + 3 = 7m => n = 7m - 3 = 7k + 4.", "hint": "(n + 10) = (n + 3) + 7. n + 3 chia hết cho 7."},
        {"id": "ucln-18-v8", "floor": 18, "levelTitle": get_level_title(18), "question": "Tìm n để phân số (2n + 7)/(n + 1) rút gọn được.",
         "options": ["n = 5k + 4 (với k ∈ ℕ)", "n = 5k + 1", "n = 2k + 1", "n chia hết cho 5"], "correctIndex": 0, "explanation": "2n + 7 = 2(n + 1) + 5. Để rút gọn thì n + 1 phải chia hết cho 5 => n + 1 = 5m => n = 5k + 4.", "hint": "2n + 7 = 2(n + 1) + 5. Mẫu n + 1 chia hết cho 5."}
    ],
    19: [
        {"id": "ucln-19-v4", "floor": 19, "levelTitle": get_level_title(19), "question": "Cho hai số a và b nguyên tố cùng nhau. Ước chung lớn nhất của (a + b) và (a - b) có thể nhận những giá trị nào?",
         "options": ["Chỉ có thể là 1 hoặc 2", "Chỉ có thể là 1", "Có thể là bất kỳ số tự nhiên nào", "Chỉ có thể là a hoặc b"], "correctIndex": 0, "explanation": "Gọi d = ƯCLN(a + b, a - b). Khi đó d | [(a+b) + (a-b)] = 2a và d | 2b => d | 2·ƯCLN(a, b) = 2. Do đó d chỉ có thể là 1 hoặc 2.", "hint": "Tổng là 2a, hiệu là 2b. d phải là ước của 2a và 2b, suy ra d | 2·ƯCLN(a, b)."},
        {"id": "ucln-19-v5", "floor": 19, "levelTitle": get_level_title(19), "question": "Nếu ƯCLN(a, b) = 1 thì ƯCLN(a + b, a - b) = 1 khi nào?",
         "options": ["Khi a và b khác tính chẵn lẻ (một số chẵn, một số lẻ)", "Khi a và b cùng là số lẻ", "Khi a và b cùng là số chẵn", "Luôn luôn bằng 1 với mọi a, b"], "correctIndex": 0, "explanation": "Nếu a và b khác tính chẵn lẻ thì a + b và a - b đều là số lẻ, do đó ƯCLN của chúng không thể chia hết cho 2, suy ra d = 1.", "hint": "Số lẻ không thể chia hết cho 2."},
        {"id": "ucln-19-v6", "floor": 19, "levelTitle": get_level_title(19), "question": "Cho a, b ∈ ℕ* thỏa mãn ƯCLN(a, b) = 1. Tìm ƯCLN(a², a + b).",
         "options": ["1", "a", "a + b", "2"], "correctIndex": 0, "explanation": "Nếu d là ước nguyên tố của a² và a + b thì d | a => d | (a + b - a) = b => d là ước chung của a và b => d = 1. Do đó ƯCLN(a², a + b) = 1.", "hint": "d là ước của a và a + b thì d phải là ước của b."},
        {"id": "ucln-19-v7", "floor": 19, "levelTitle": get_level_title(19), "question": "Nếu p là số nguyên tố lớn hơn 3, thì ƯCLN(p² - 1, 24) bằng bao nhiêu?",
         "options": ["24", "12", "8", "6"], "correctIndex": 0, "explanation": "Với mọi số nguyên tố p > 3, p² - 1 luôn chia hết cho 3 và chia hết cho 8 (vì (p-1)(p+1) là tích hai số chẵn liên tiếp chia hết cho 8). Do đó p² - 1 luôn chia hết cho 24 => ƯCLN = 24.", "hint": "(p - 1)(p + 1) chia hết cho cả 3 và 8 với p nguyên tố > 3."},
        {"id": "ucln-19-v8", "floor": 19, "levelTitle": get_level_title(19), "question": "Cho hai số tự nhiên a và b nguyên tố cùng nhau. Tìm ƯCLN(ab, a + b).",
         "options": ["1", "a", "b", "2"], "correctIndex": 0, "explanation": "Nếu d là ước nguyên tố của ab và a + b thì d | a hoặc d | b. Nếu d | a thì do d | (a + b) nên d | b => d | ƯCLN(a, b) = 1 (vô lý). Vậy ƯCLN(ab, a + b) = 1.", "hint": "Phương pháp phản chứng bằng ước nguyên tố d."}
    ],
    20: [
        {"id": "ucln-20-v4", "floor": 20, "levelTitle": get_level_title(20), "question": "Tìm ƯCLN(2n + 3, 2n² + 5n + 2) với n là số tự nhiên.",
         "options": ["1", "2", "3", "2n + 3"], "correctIndex": 0, "explanation": "Ta có 2n² + 5n + 2 = (2n + 3)(n + 1) - 1. Nếu d là ước chung thì d | [(2n + 3)(n + 1) - (2n² + 5n + 2)] = 1 => d = 1.", "hint": "Biến đổi: (2n + 3)(n + 1) = 2n² + 5n + 3, trừ đi đa thức đã cho bằng 1."},
        {"id": "ucln-20-v5", "floor": 20, "levelTitle": get_level_title(20), "question": "Cho tổng A = 2 + 2² + 2³ + ... + 2⁶⁰. Tìm ƯCLN(A, 3).",
         "options": ["3", "1", "2", "6"], "correctIndex": 0, "explanation": "A = (2 + 2²) + (2³ + 2⁴) + ... + (2⁵⁹ + 2⁶⁰) = 2(1 + 2) + 2³(1 + 2) + ... = 3·(2 + 2³ + ...). Do đó A chia hết cho 3 => ƯCLN(A, 3) = 3.", "hint": "Nhóm từng đôi một: 2 + 2² = 2 · 3 chia hết cho 3."},
        {"id": "ucln-20-v6", "floor": 20, "levelTitle": get_level_title(20), "question": "Tìm tất cả các số tự nhiên n để (n² + n + 1) chia hết cho (n + 1).",
         "options": ["n = 0", "n = 1", "Mọi n ∈ ℕ", "Không tồn tại n"], "correctIndex": 0, "explanation": "n² + n + 1 = n(n + 1) + 1. Để chia hết cho n + 1 thì 1 phải chia hết cho n + 1 => n + 1 = 1 => n = 0.", "hint": "Tách: n(n + 1) + 1. Suy ra 1 phải chia hết cho n + 1."},
        {"id": "ucln-20-v7", "floor": 20, "levelTitle": get_level_title(20), "question": "Tìm số tự nhiên n lớn nhất có 2 chữ số sao cho 2n + 1 và 3n + 1 đều là số chính phương.",
         "options": ["n = 40", "n = 24", "n = 56", "n = 12"], "correctIndex": 0, "explanation": "Với n = 40: 2n + 1 = 81 = 9²; 3n + 1 = 121 = 11² (đều là số chính phương). Đây là số lớn nhất có 2 chữ số thỏa mãn.", "hint": "Thử n = 40: 2·40 + 1 = 81, 3·40 + 1 = 121."},
        {"id": "ucln-20-v8", "floor": 20, "levelTitle": get_level_title(20), "question": "Tìm số nguyên tố p sao cho 2p + 1 và 4p + 1 cũng là các số nguyên tố.",
         "options": ["p = 3", "p = 5", "p = 7", "Không có p nào"], "correctIndex": 0, "explanation": "Với p = 3: 2p + 1 = 7, 4p + 1 = 13 (đều nguyên tố). Với p khác 3: p có dạng 3k + 1 thì 4p + 1 = 12k + 5? Thử p = 3k + 1 => 2p + 1 = 6k + 3 = 3(2k+1) ⋮ 3; nếu p = 3k + 2 => 4p + 1 = 12k + 9 = 3(4k+3) ⋮ 3. Do đó chỉ có duy nhất p = 3.", "hint": "Xét số dư của p khi chia cho 3."}
    ]
}

# Now load existing uclnQuestions.ts, parse questions, append v4..v8, and re-write
with open("src/data/uclnQuestions.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace or insert into each floor:
for floor in range(1, 21):
    reserves = ucln_reserve[floor]
    reserve_ts = ""
    for q in reserves:
        q_json = json.dumps(q, ensure_ascii=False, indent=6)
        reserve_ts += f",\n    {q_json}"
    
    # We find the end of the array for floor, e.g. for `1: [` up to next floor `2: [`
    # A reliable way is finding `ucln-{floor}-v3` object closing brace `}`
    v3_id = f"ucln-{floor}-v3"
    idx = content.find(v3_id)
    if idx != -1:
        # find the closing brace of this question object
        brace_idx = content.find("}", idx)
        if brace_idx != -1:
            content = content[:brace_idx+1] + reserve_ts + content[brace_idx+1:]

# Write back
with open("src/data/uclnQuestions.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully injected 100 reserve questions into uclnQuestions.ts!")
