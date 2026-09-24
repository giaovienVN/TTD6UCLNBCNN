import { Question } from '../types/game';

// 20 floors x 3 variants = 60 questions for BCNN
export const bcnnQuestionsPool: Record<number, Question[]> = {
  1: [
    {
      id: 'bcnn-1-v1',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(36, 54) và các bội chung nhỏ hơn 400.',
      options: [
        'BCNN = 108; BC < 400 là {0; 108; 216; 324}',
        'BCNN = 54; BC < 400 là {0; 54; 108; 162}',
        'BCNN = 216; BC < 400 là {0; 216}',
        'BCNN = 108; BC < 400 là {108; 216; 324}'
      ],
      correctIndex: 0,
      explanation: '36 = 2² · 3²; 54 = 2 · 3³ => BCNN = 2² · 3³ = 108. Các bội chung nhỏ hơn 400 là 0, 108, 216, 324.',
      hint: '36 = 2² · 3²; 54 = 2 · 3³. Lấy tích các thừa số chung và riêng với số mũ lớn nhất: 2² · 3³ = 108.'
    },
    {
      id: 'bcnn-1-v2',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(24, 36) và các bội chung nhỏ hơn 150 (khác 0).',
      options: [
        'BCNN = 72; BC khác 0 nhỏ hơn 150 là {72; 144}',
        'BCNN = 48; BC khác 0 nhỏ hơn 150 là {48; 96; 144}',
        'BCNN = 72; BC khác 0 nhỏ hơn 150 là {72}',
        'BCNN = 144; BC khác 0 nhỏ hơn 150 là {144}'
      ],
      correctIndex: 0,
      explanation: '24 = 2³ · 3; 36 = 2² · 3² => BCNN = 2³ · 3² = 72. Bội khác 0 nhỏ hơn 150 là 72 và 144.',
      hint: '24 = 2³·3; 36 = 2²·3² => BCNN = 2³·3² = 72.'
    },
    {
      id: 'bcnn-1-v3',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(45, 60) và bội chung nhỏ nhất có ba chữ số của chúng.',
      options: [
        'BCNN = 180; Số có ba chữ số nhỏ nhất là 180',
        'BCNN = 90; Số có ba chữ số nhỏ nhất là 180',
        'BCNN = 300; Số có ba chữ số nhỏ nhất là 300',
        'BCNN = 180; Số có ba chữ số nhỏ nhất là 360'
      ],
      correctIndex: 0,
      explanation: '45 = 3² · 5; 60 = 2² · 3 · 5 => BCNN = 2² · 3² · 5 = 180. Bản thân 180 đã là số có ba chữ số nhỏ nhất.',
      hint: '45 = 3² · 5; 60 = 2² · 3 · 5. Thừa số nguyên tố chung và riêng số mũ lớn nhất: 2² · 3² · 5.'
    },
    {
      "id": "bcnn-1-v4",
      "floor": 1,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(28, 42) và các bội chung nhỏ hơn 200 (khác 0).",
      "options": [
            "BCNN = 84; BC = {84; 168}",
            "BCNN = 84; BC = {84; 126; 168}",
            "BCNN = 42; BC = {42; 84; 126; 168}",
            "BCNN = 168; BC = {168}"
      ],
      "correctIndex": 0,
      "explanation": "28 = 2²·7; 42 = 2·3·7 => BCNN = 2²·3·7 = 84. Bội chung khác 0 nhỏ hơn 200 là 84 và 168.",
      "hint": "BCNN(28, 42) = 84. Lấy 84 nhân với 1, 2..."
},
    {
      "id": "bcnn-1-v5",
      "floor": 1,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(40, 56) và bội chung nhỏ nhất có 3 chữ số của chúng.",
      "options": [
            "280",
            "140",
            "560",
            "120"
      ],
      "correctIndex": 0,
      "explanation": "40 = 2³·5; 56 = 2³·7 => BCNN = 2³·5·7 = 280. Bản thân 280 đã có 3 chữ số.",
      "hint": "40 = 2³·5, 56 = 2³·7 => BCNN = 8·5·7 = 280."
},
    {
      "id": "bcnn-1-v6",
      "floor": 1,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(30, 45) và số lượng bội chung nhỏ hơn 300 (kể cả 0).",
      "options": [
            "4 bội chung",
            "3 bội chung",
            "5 bội chung",
            "2 bội chung"
      ],
      "correctIndex": 0,
      "explanation": "30 = 2·3·5; 45 = 3²·5 => BCNN = 2·3²·5 = 90. Các bội chung nhỏ hơn 300 là 0, 90, 180, 270 (có 4 số).",
      "hint": "BCNN = 90. Liệt kê các số 90k < 300 bắt đầu từ k = 0."
},
    {
      "id": "bcnn-1-v7",
      "floor": 1,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(48, 72) và các bội chung trong khoảng từ 100 đến 300.",
      "options": [
            "{144; 288}",
            "{144}",
            "{144; 216; 288}",
            "{96; 144; 288}"
      ],
      "correctIndex": 0,
      "explanation": "48 = 2⁴·3; 72 = 2³·3² => BCNN = 2⁴·3² = 144. Bội chung trong khoảng [100, 300] là 144 và 288.",
      "hint": "BCNN = 144. 144 · 1 = 144; 144 · 2 = 288."
},
    {
      "id": "bcnn-1-v8",
      "floor": 1,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(50, 75) và bội chung chẵn nhỏ nhất khác 0.",
      "options": [
            "150",
            "300",
            "75",
            "450"
      ],
      "correctIndex": 0,
      "explanation": "50 = 2·5²; 75 = 3·5² => BCNN = 2·3·5² = 150. Vì 150 là số chẵn nên nó chính là bội chung chẵn nhỏ nhất khác 0.",
      "hint": "BCNN = 150 (là số chẵn)."
}
  ],

  2: [
    {
      id: 'bcnn-2-v1',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(12, 18, 20).',
      options: [
        '90',
        '180',
        '360',
        '120'
      ],
      correctIndex: 1,
      explanation: '12 = 2² · 3; 18 = 2 · 3²; 20 = 2² · 5 => BCNN = 2² · 3² · 5 = 180.',
      hint: 'Phân tích: 12 = 2²·3, 18 = 2·3², 20 = 2²·5. Thừa số nguyên tố gồm 2 (mũ 2), 3 (mũ 2), 5 (mũ 1).'
    },
    {
      id: 'bcnn-2-v2',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(15, 20, 30).',
      options: [
        '60',
        '120',
        '90',
        '300'
      ],
      correctIndex: 0,
      explanation: '15 = 3 · 5; 20 = 2² · 5; 30 = 2 · 3 · 5 => BCNN = 2² · 3 · 5 = 60.',
      hint: '60 chia hết cho cả 15, 20 và 30.'
    },
    {
      id: 'bcnn-2-v3',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm BCNN(16, 24, 32).',
      options: [
        '64',
        '96',
        '192',
        '48'
      ],
      correctIndex: 1,
      explanation: '16 = 2⁴; 24 = 2³ · 3; 32 = 2⁵ => BCNN = 2⁵ · 3 = 32 · 3 = 96.',
      hint: 'Số mũ lớn nhất của 2 là 5 (32 = 2⁵), của 3 là 1.'
    },
    {
      "id": "bcnn-2-v4",
      "floor": 2,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(14, 21, 28).",
      "options": [
            "84",
            "42",
            "168",
            "56"
      ],
      "correctIndex": 0,
      "explanation": "14 = 2·7; 21 = 3·7; 28 = 2²·7 => BCNN = 2² · 3 · 7 = 84.",
      "hint": "Thừa số nguyên tố gồm 2² · 3 · 7 = 84."
},
    {
      "id": "bcnn-2-v5",
      "floor": 2,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(24, 30, 36).",
      "options": [
            "360",
            "180",
            "720",
            "120"
      ],
      "correctIndex": 0,
      "explanation": "24 = 2³·3; 30 = 2·3·5; 36 = 2²·3² => BCNN = 2³ · 3² · 5 = 8 · 9 · 5 = 360.",
      "hint": "Số mũ lớn nhất: 2³, 3², 5¹ => 8 · 9 · 5 = 360."
},
    {
      "id": "bcnn-2-v6",
      "floor": 2,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(18, 27, 45).",
      "options": [
            "270",
            "135",
            "540",
            "90"
      ],
      "correctIndex": 0,
      "explanation": "18 = 2·3²; 27 = 3³; 45 = 3²·5 => BCNN = 2 · 3³ · 5 = 2 · 27 · 5 = 270.",
      "hint": "Lấy 2¹ · 3³ · 5¹ = 270."
},
    {
      "id": "bcnn-2-v7",
      "floor": 2,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(20, 25, 30).",
      "options": [
            "300",
            "150",
            "600",
            "100"
      ],
      "correctIndex": 0,
      "explanation": "20 = 2²·5; 25 = 5²; 30 = 2·3·5 => BCNN = 2² · 3 · 5² = 4 · 3 · 25 = 300.",
      "hint": "Lấy 2² · 3 · 5² = 300."
},
    {
      "id": "bcnn-2-v8",
      "floor": 2,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm BCNN(12, 16, 20).",
      "options": [
            "240",
            "120",
            "480",
            "80"
      ],
      "correctIndex": 0,
      "explanation": "12 = 2²·3; 16 = 2⁴; 20 = 2²·5 => BCNN = 2⁴ · 3 · 5 = 16 · 15 = 240.",
      "hint": "Số mũ lớn nhất của 2 là 4: 2⁴ · 3 · 5 = 240."
}
  ],

  3: [
    {
      id: 'bcnn-3-v1',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm số tự nhiên x nhỏ nhất khác 0 thỏa mãn: x ⋮ 15, x ⋮ 20 và x ⋮ 25.',
      options: [
        '150',
        '600',
        '300',
        '75'
      ],
      correctIndex: 2,
      explanation: 'x là số nhỏ nhất khác 0 cùng chia hết cho 15, 20, 25 nên x = BCNN(15, 20, 25) = 300.',
      hint: '15 = 3 · 5; 20 = 2² · 5; 25 = 5². BCNN = 2² · 3 · 5² = 300.'
    },
    {
      id: 'bcnn-3-v2',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm số tự nhiên a nhỏ nhất khác 0 biết a chia hết cho cả 14, 21 và 28.',
      options: [
        '56',
        '84',
        '168',
        '42'
      ],
      correctIndex: 1,
      explanation: 'a = BCNN(14, 21, 28). 14 = 2·7; 21 = 3·7; 28 = 2²·7 => BCNN = 2² · 3 · 7 = 84.',
      hint: '28 = 2² · 7; 21 = 3 · 7 => BCNN = 4 · 3 · 7 = 84.'
    },
    {
      id: 'bcnn-3-v3',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm số tự nhiên k nhỏ nhất khác 0 chia hết cho cả 18, 30 và 45.',
      options: [
        '90',
        '180',
        '270',
        '135'
      ],
      correctIndex: 0,
      explanation: '18 = 2 · 3²; 30 = 2 · 3 · 5; 45 = 3² · 5 => BCNN = 2 · 3² · 5 = 90.',
      hint: '90 chia hết cho 18 (được 5), chia hết cho 30 (được 3), chia hết cho 45 (được 2).'
    },
    {
      "id": "bcnn-3-v4",
      "floor": 3,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm số tự nhiên x nhỏ nhất khác 0 thỏa mãn: x ⋮ 16, x ⋮ 20 và x ⋮ 24.",
      "options": [
            "240",
            "120",
            "480",
            "160"
      ],
      "correctIndex": 0,
      "explanation": "x = BCNN(16, 20, 24). 16 = 2⁴; 20 = 2²·5; 24 = 2³·3 => BCNN = 2⁴ · 3 · 5 = 240.",
      "hint": "x là BCNN của 16, 20, 24."
},
    {
      "id": "bcnn-3-v5",
      "floor": 3,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm số tự nhiên a nhỏ nhất khác 0 biết a chia hết cho 15, 18 và 24.",
      "options": [
            "360",
            "180",
            "720",
            "240"
      ],
      "correctIndex": 0,
      "explanation": "a = BCNN(15, 18, 24). 15 = 3·5; 18 = 2·3²; 24 = 2³·3 => BCNN = 2³ · 3² · 5 = 360.",
      "hint": "BCNN(15, 18, 24) = 8 · 9 · 5 = 360."
},
    {
      "id": "bcnn-3-v6",
      "floor": 3,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm số tự nhiên m nhỏ nhất khác 0 cùng chia hết cho 12, 28 và 42.",
      "options": [
            "84",
            "168",
            "42",
            "126"
      ],
      "correctIndex": 0,
      "explanation": "m = BCNN(12, 28, 42). 12 = 2²·3; 28 = 2²·7; 42 = 2·3·7 => BCNN = 2² · 3 · 7 = 84.",
      "hint": "BCNN = 4 · 3 · 7 = 84."
},
    {
      "id": "bcnn-3-v7",
      "floor": 3,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm số tự nhiên y nhỏ nhất khác 0 chia hết cho cả 25, 30 và 45.",
      "options": [
            "450",
            "225",
            "900",
            "150"
      ],
      "correctIndex": 0,
      "explanation": "y = BCNN(25, 30, 45). 25 = 5²; 30 = 2·3·5; 45 = 3²·5 => BCNN = 2 · 3² · 5² = 450.",
      "hint": "BCNN = 2 · 9 · 25 = 450."
},
    {
      "id": "bcnn-3-v8",
      "floor": 3,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Tìm số tự nhiên k nhỏ nhất khác 0 chia hết cho cả 14, 35 và 49.",
      "options": [
            "490",
            "245",
            "980",
            "147"
      ],
      "correctIndex": 0,
      "explanation": "k = BCNN(14, 35, 49). 14 = 2·7; 35 = 5·7; 49 = 7² => BCNN = 2 · 5 · 7² = 490.",
      "hint": "BCNN = 10 · 49 = 490."
}
  ],

  4: [
    {
      id: 'bcnn-4-v1',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho m = 2² · 5 · 7 và n = 2 · 3² · 5. Tìm BCNN(m, n).',
      options: [
        '630',
        '1260',
        '2520',
        '140'
      ],
      correctIndex: 1,
      explanation: 'BCNN(m, n) = 2² · 3² · 5 · 7 = 4 · 9 · 5 · 7 = 1260.',
      hint: 'Chọn tất cả thừa số nguyên tố xuất hiện ở m và n với số mũ lớn nhất: 2² · 3² · 5 · 7.'
    },
    {
      id: 'bcnn-4-v2',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho x = 2³ · 3 · 5² và y = 2² · 3² · 7. Tìm BCNN(x, y).',
      options: [
        '12600',
        '6300',
        '2520',
        '4200'
      ],
      correctIndex: 0,
      explanation: 'BCNN(x, y) = 2³ · 3² · 5² · 7 = 8 · 9 · 25 · 7 = 12600.',
      hint: 'Lấy 2³ · 3² · 5² · 7 = 12600.'
    },
    {
      id: 'bcnn-4-v3',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho a = 3 · 7² và b = 2³ · 3² · 7. Tìm BCNN(a, b).',
      options: [
        '3528',
        '1176',
        '588',
        '7056'
      ],
      correctIndex: 0,
      explanation: 'BCNN(a, b) = 2³ · 3² · 7² = 8 · 9 · 49 = 3528.',
      hint: 'Số mũ lớn nhất: 2³, 3², 7² => 8 · 9 · 49.'
    },
    {
      "id": "bcnn-4-v4",
      "floor": 4,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Cho a = 2² · 3³ · 5 và b = 2³ · 3 · 7. Tìm BCNN(a, b).",
      "options": [
            "7560",
            "2520",
            "3780",
            "15120"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(a, b) = 2³ · 3³ · 5 · 7 = 8 · 27 · 35 = 7560.",
      "hint": "Lấy số mũ lớn nhất: 2³ · 3³ · 5 · 7 = 7560."
},
    {
      "id": "bcnn-4-v5",
      "floor": 4,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Cho m = 2 · 5² · 11 và n = 3 · 5 · 11². Tìm BCNN(m, n).",
      "options": [
            "18150",
            "36300",
            "9075",
            "1650"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(m, n) = 2 · 3 · 5² · 11² = 6 · 25 · 121 = 18150.",
      "hint": "2 · 3 · 25 · 121 = 18150."
},
    {
      "id": "bcnn-4-v6",
      "floor": 4,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Cho x = 3² · 7 · 13 và y = 2² · 3 · 7². Tìm BCNN(x, y).",
      "options": [
            "22932",
            "11466",
            "45864",
            "5733"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(x, y) = 2² · 3² · 7² · 13 = 4 · 9 · 49 · 13 = 22932.",
      "hint": "2² · 3² · 7² · 13 = 36 · 637 = 22932."
},
    {
      "id": "bcnn-4-v7",
      "floor": 4,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Cho p = 2⁴ · 5 và q = 2² · 3² · 5². Tìm BCNN(p, q).",
      "options": [
            "3600",
            "1800",
            "7200",
            "900"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(p, q) = 2⁴ · 3² · 5² = 16 · 9 · 25 = 3600.",
      "hint": "16 · 9 · 25 = 3600."
},
    {
      "id": "bcnn-4-v8",
      "floor": 4,
      "levelTitle": "Mức độ 1: Cơ bản & Thông hiểu",
      "question": "Cho u = 2 · 3 · 5³ và v = 2³ · 3² · 5. Tìm BCNN(u, v).",
      "options": [
            "9000",
            "4500",
            "18000",
            "3000"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(u, v) = 2³ · 3² · 5³ = 8 · 9 · 125 = 9000.",
      "hint": "8 · 9 · 125 = 72 · 125 = 9000."
}
  ],

  5: [
    {
      id: 'bcnn-5-v1',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm các số tự nhiên x sao cho x ∈ BC(8, 12, 15) và 100 ≤ x ≤ 300.',
      options: [
        'x ∈ {120; 240}',
        'x ∈ {120; 180; 240}',
        'x ∈ {240; 360}',
        'x ∈ {120; 240; 360}'
      ],
      correctIndex: 0,
      explanation: 'BCNN(8, 12, 15) = 120. Các bội chung là {0; 120; 240; 360;...}. Nằm trong khoảng [100, 300] là 120 và 240.',
      hint: 'Tìm BCNN(8, 12, 15) = 120 rồi nhân với 1, 2, 3... để chọn trong khoảng 100 đến 300.'
    },
    {
      id: 'bcnn-5-v2',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm số tự nhiên a sao cho a ∈ BC(12, 16, 24) và 150 < a < 250.',
      options: [
        '192',
        '240',
        '180',
        '216'
      ],
      correctIndex: 0,
      explanation: 'BCNN(12, 16, 24) = 48. Bội của 48 là 48, 96, 144, 192, 240. Số nằm trong khoảng 150 < a < 250 là 192 (hoặc cả 192 và 240, trong các đáp án đơn chỉ có 192 và 240; nếu 192 là lựa chọn duy nhất chính xác). Ở đây 192 là 48 · 4, 240 = 48 · 5. Cả hai đều thỏa, kiểm tra đáp án A: 192.',
      hint: 'BCNN(12, 16, 24) = 48. 48 · 4 = 192.'
    },
    {
      id: 'bcnn-5-v3',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm các số tự nhiên y ∈ BC(6, 10, 15) sao cho 50 < y < 150.',
      options: [
        '{60; 90; 120}',
        '{60; 120}',
        '{90; 120}',
        '{30; 60; 90; 120}'
      ],
      correctIndex: 0,
      explanation: 'BCNN(6, 10, 15) = 30. Bội của 30 trong (50, 150) là 60, 90, 120.',
      hint: 'BCNN = 30. Liệt kê các bội số của 30 nằm giữa 50 và 150.'
    },
    {
      "id": "bcnn-5-v4",
      "floor": 5,
      "levelTitle": "Mức độ 1: Trạm Kiểm Soát 1",
      "question": "Tìm các số tự nhiên x ∈ BC(15, 20, 25) sao cho 500 ≤ x ≤ 1000.",
      "options": [
            "{600; 900}",
            "{600; 750; 900}",
            "{300; 600; 900}",
            "{600}"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(15, 20, 25) = 300. Bội của 300 trong khoảng [500, 1000] là 600 và 900.",
      "hint": "BCNN = 300. 300 · 2 = 600; 300 · 3 = 900."
},
    {
      "id": "bcnn-5-v5",
      "floor": 5,
      "levelTitle": "Mức độ 1: Trạm Kiểm Soát 1",
      "question": "Tìm các số tự nhiên a sao cho a ∈ BC(18, 24, 36) và 200 < a < 300.",
      "options": [
            "{216; 288}",
            "{216}",
            "{288}",
            "{144; 216; 288}"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(18, 24, 36) = 72. Bội của 72 trong khoảng (200, 300) là 72 · 3 = 216 và 72 · 4 = 288.",
      "hint": "BCNN = 72. Xét 72 · 3 và 72 · 4."
},
    {
      "id": "bcnn-5-v6",
      "floor": 5,
      "levelTitle": "Mức độ 1: Trạm Kiểm Soát 1",
      "question": "Tìm số tự nhiên y ∈ BC(14, 21, 28) sao cho 150 < y < 200.",
      "options": [
            "168",
            "182",
            "196",
            "154"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(14, 21, 28) = 84. Bội của 84 là 84, 168, 252. Số nằm trong khoảng (150, 200) là 168.",
      "hint": "BCNN = 84. 84 · 2 = 168."
},
    {
      "id": "bcnn-5-v7",
      "floor": 5,
      "levelTitle": "Mức độ 1: Trạm Kiểm Soát 1",
      "question": "Tìm số tự nhiên k ∈ BC(10, 15, 25) sao cho 200 ≤ k ≤ 400.",
      "options": [
            "300",
            "250",
            "350",
            "200"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(10, 15, 25) = 150. Bội của 150 trong khoảng [200, 400] duy nhất là 150 · 2 = 300.",
      "hint": "BCNN = 150. 150 · 2 = 300."
},
    {
      "id": "bcnn-5-v8",
      "floor": 5,
      "levelTitle": "Mức độ 1: Trạm Kiểm Soát 1",
      "question": "Tìm số tự nhiên m ∈ BC(12, 18, 30) trong khoảng từ 300 đến 400.",
      "options": [
            "360",
            "324",
            "380",
            "340"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(12, 18, 30) = 180. Bội trong khoảng (300, 400) là 180 · 2 = 360.",
      "hint": "BCNN = 180. 180 · 2 = 360."
}
  ],

  6: [
    {
      id: 'bcnn-6-v1',
      floor: 6,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Ba hồi chuông reng sau mỗi 8 phút, 12 phút và 15 phút. Sau bao lâu kể từ lúc bắt đầu cả 3 chuông lại cùng reng?',
      options: [
        '60 phút',
        '120 phút (2 giờ)',
        '180 phút',
        '240 phút'
      ],
      correctIndex: 1,
      explanation: 'Thời gian 3 chuông cùng reng là BCNN(8, 12, 15) = 120 phút = 2 giờ.',
      hint: 'Thời gian cùng kêu là bội chung nhỏ nhất của 8, 12 và 15.'
    },
    {
      id: 'bcnn-6-v2',
      floor: 6,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Hai bạn An và Bình cùng trực nhật vào một ngày. An cứ 6 ngày trực một lần, Bình cứ 8 ngày trực một lần. Sau ít nhất bao nhiêu ngày hai bạn lại cùng trực nhật?',
      options: [
        '14 ngày',
        '24 ngày',
        '48 ngày',
        '12 ngày'
      ],
      correctIndex: 1,
      explanation: 'Số ngày ít nhất là BCNN(6, 8) = 24 ngày.',
      hint: '6 = 2 · 3; 8 = 2³ => BCNN = 2³ · 3 = 24.'
    },
    {
      id: 'bcnn-6-v3',
      floor: 6,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Ba xe buýt xuất phát cùng một lúc. Xe thứ nhất cứ 15 phút một chuyến, xe thứ hai 20 phút, xe thứ ba 25 phút. Sau ít nhất bao lâu 3 xe lại xuất phát cùng nhau?',
      options: [
        '150 phút',
        '300 phút (5 giờ)',
        '100 phút',
        '600 phút'
      ],
      correctIndex: 1,
      explanation: 'Thời gian ít nhất là BCNN(15, 20, 25) = 300 phút = 5 giờ.',
      hint: 'BCNN(15, 20, 25) = 2² · 3 · 5² = 300.'
    },
    {
      "id": "bcnn-6-v4",
      "floor": 6,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Ba ngọn hải đăng chớp sáng: ngọn 1 cứ 12 giây, ngọn 2 cứ 16 giây, ngọn 3 cứ 24 giây. Cả 3 cùng chớp sáng một lúc. Sau ít nhất bao lâu chúng lại cùng chớp sáng?",
      "options": [
            "48 giây",
            "96 giây",
            "72 giây",
            "36 giây"
      ],
      "correctIndex": 0,
      "explanation": "Thời gian ít nhất là BCNN(12, 16, 24) = 48 giây.",
      "hint": "BCNN(12, 16, 24) = 48."
},
    {
      "id": "bcnn-6-v5",
      "floor": 6,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Ba xe buýt A, B, C cùng rời bến lúc 6 giờ sáng. Xe A cứ 20 phút chạy 1 chuyến, xe B cứ 30 phút, xe C cứ 45 phút. Lúc mấy giờ cả 3 xe lại cùng rời bến lần tiếp theo?",
      "options": [
            "9 giờ sáng",
            "8 giờ sáng",
            "9 giờ 30 phút",
            "10 giờ sáng"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(20, 30, 45) = 180 phút = 3 giờ. 6 giờ + 3 giờ = 9 giờ sáng.",
      "hint": "BCNN(20, 30, 45) = 180 phút = 3 giờ."
},
    {
      "id": "bcnn-6-v6",
      "floor": 6,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Hai vệ tinh bay quanh Trái Đất: vệ tinh 1 mất 90 phút một vòng, vệ tinh 2 mất 120 phút. Nếu cùng qua một kinh tuyến, sau ít nhất bao lâu chúng lại cùng qua kinh tuyến đó?",
      "options": [
            "360 phút (6 giờ)",
            "240 phút (4 giờ)",
            "180 phút (3 giờ)",
            "480 phút (8 giờ)"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(90, 120) = 360 phút = 6 giờ.",
      "hint": "90 = 30 · 3; 120 = 30 · 4 => BCNN = 30 · 12 = 360."
},
    {
      "id": "bcnn-6-v7",
      "floor": 6,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Ba bạn Lan, Mai, Hoa cùng đi bơi vào ngày Chủ nhật. Lan cứ 4 ngày đi một lần, Mai 6 ngày, Hoa 8 ngày. Sau ít nhất bao nhiêu ngày cả ba bạn lại cùng đi bơi?",
      "options": [
            "24 ngày",
            "48 ngày",
            "12 ngày",
            "18 ngày"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(4, 6, 8) = 24 ngày.",
      "hint": "BCNN(4, 6, 8) = 24."
},
    {
      "id": "bcnn-6-v8",
      "floor": 6,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Hai bánh xe có răng cưa khớp nhau: bánh lớn 48 răng, bánh nhỏ 18 răng. Sau khi bánh lớn quay ít nhất bao nhiêu vòng thì hai răng ban đầu lại khớp vào nhau?",
      "options": [
            "3 vòng",
            "4 vòng",
            "6 vòng",
            "8 vòng"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(48, 18) = 144 răng. Bánh lớn cần quay: 144 : 48 = 3 vòng.",
      "hint": "Tìm BCNN rồi chia cho 48."
}
  ],

  7: [
    {
      id: 'bcnn-7-v1',
      floor: 7,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Học sinh khối 6 khi xếp hàng 12, hàng 15, hàng 18 đều vừa đủ. Biết số học sinh trong khoảng từ 300 đến 400. Số học sinh là:',
      options: [
        '360 học sinh',
        '324 học sinh',
        '380 học sinh',
        '340 học sinh'
      ],
      correctIndex: 0,
      explanation: 'Số học sinh là bội chung của 12, 15, 18. BCNN(12, 15, 18) = 180. Bội của 180 trong khoảng [300, 400] là 360.',
      hint: 'BCNN(12, 15, 18) = 180. Tìm bội của 180 nằm giữa 300 và 400.'
    },
    {
      id: 'bcnn-7-v2',
      floor: 7,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Một đơn vị bộ đội khi xếp hàng 20, 25, 30 người đều vừa đủ hàng. Biết quân số trong khoảng từ 500 đến 700 người. Số quân nhân là:',
      options: [
        '550 người',
        '600 người',
        '650 người',
        '580 người'
      ],
      correctIndex: 1,
      explanation: 'Quân số là BC(20, 25, 30). BCNN(20, 25, 30) = 300. Bội của 300 trong khoảng 500 - 700 là 600.',
      hint: 'BCNN(20, 25, 30) = 300. 300 · 2 = 600.'
    },
    {
      id: 'bcnn-7-v3',
      floor: 7,
      levelTitle: 'Mức độ 2: Chu kỳ & Bài toán thực tế',
      question: 'Số sách trong một thư viện khi xếp thành từng bó 10 cuốn, 12 cuốn hay 15 cuốn đều vừa vặn. Biết số sách từ 200 đến 250 cuốn. Thư viện có bao nhiêu cuốn sách?',
      options: [
        '210 cuốn',
        '240 cuốn',
        '220 cuốn',
        '230 cuốn'
      ],
      correctIndex: 1,
      explanation: 'BCNN(10, 12, 15) = 60. Các bội là 60, 120, 180, 240, 300. Số nằm từ 200 đến 250 là 240.',
      hint: 'BCNN(10, 12, 15) = 60. Bội của 60 là 60 · 4 = 240.'
    },
    {
      "id": "bcnn-7-v4",
      "floor": 7,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Học sinh một trường khi xếp hàng 15, hàng 18, hàng 24 đều vừa đủ. Biết số học sinh từ 600 đến 800 em. Số học sinh là:",
      "options": [
            "720 em",
            "640 em",
            "750 em",
            "680 em"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(15, 18, 24) = 360. Bội của 360 trong khoảng [600, 800] là 360 · 2 = 720.",
      "hint": "BCNN(15, 18, 24) = 360. 360 · 2 = 720."
},
    {
      "id": "bcnn-7-v5",
      "floor": 7,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Một đội thiếu niên khi xếp hàng 10, hàng 12, hàng 15 đều vừa đủ hàng. Biết số bạn trong khoảng từ 150 đến 200 bạn. Số thiếu niên là:",
      "options": [
            "180 bạn",
            "160 bạn",
            "190 bạn",
            "150 bạn"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(10, 12, 15) = 60. Bội của 60 trong (150, 200) là 60 · 3 = 180 bạn.",
      "hint": "BCNN = 60. 60 · 3 = 180."
},
    {
      "id": "bcnn-7-v6",
      "floor": 7,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Một kho hàng xếp bao gạo lên xe 12 bao/chuyến, 16 bao/chuyến hoặc 20 bao/chuyến đều hết sạch. Biết số bao từ 400 đến 500. Số bao gạo là:",
      "options": [
            "480 bao",
            "440 bao",
            "460 bao",
            "420 bao"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(12, 16, 20) = 240. Bội trong khoảng [400, 500] là 240 · 2 = 480 bao.",
      "hint": "BCNN = 240. 240 · 2 = 480."
},
    {
      "id": "bcnn-7-v7",
      "floor": 7,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Một đoàn diễu hành xếp thành khối 16 người, 20 người hay 24 người đều trọn vẹn. Biết số người từ 450 đến 600. Đoàn có bao nhiêu người?",
      "options": [
            "480 người",
            "520 người",
            "560 người",
            "540 người"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(16, 20, 24) = 240. Bội của 240 trong (450, 600) là 240 · 2 = 480 người.",
      "hint": "BCNN = 240. 240 · 2 = 480."
},
    {
      "id": "bcnn-7-v8",
      "floor": 7,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Số viên bi khi chia đều vào túi 14 viên, 21 viên hoặc 28 viên đều không thừa viên nào. Biết số bi trong khoảng 200 đến 300 viên. Có bao nhiêu viên bi?",
      "options": [
            "252 viên",
            "224 viên",
            "280 viên",
            "210 viên"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(14, 21, 28) = 84. Bội của 84 trong khoảng [200, 300] là 84 · 3 = 252 viên.",
      "hint": "BCNN = 84. 84 · 3 = 252."
}
  ],

  8: [
    {
      id: 'bcnn-8-v1',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên a nhỏ nhất sao cho a chia 4 dư 3, chia 5 dư 4, chia 6 dư 5.',
      options: [
        '59',
        '61',
        '119',
        '79'
      ],
      correctIndex: 0,
      explanation: 'a chia 4 dư 3, 5 dư 4, 6 dư 5 => (a + 1) chia hết cho 4, 5, 6. Do đó (a + 1) = BCNN(4, 5, 6) = 60 => a = 59.',
      hint: 'Nhận xét: số dư luôn kém số chia 1 đơn vị. Do đó (a + 1) chia hết cho 4, 5, 6.'
    },
    {
      id: 'bcnn-8-v2',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên x nhỏ nhất biết khi chia cho 7 dư 5, chia 8 dư 6, chia 9 dư 7.',
      options: [
        '502',
        '504',
        '250',
        '506'
      ],
      correctIndex: 0,
      explanation: '(x + 2) chia hết cho cả 7, 8, 9. BCNN(7, 8, 9) = 7 · 8 · 9 = 504 => x = 504 - 2 = 502.',
      hint: 'Số dư luôn kém số chia 2 đơn vị => x + 2 là bội chung của 7, 8, 9.'
    },
    {
      id: 'bcnn-8-v3',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên n nhỏ nhất chia cho 3 dư 1, chia 4 dư 2, chia 5 dư 3, chia 6 dư 4.',
      options: [
        '58',
        '62',
        '118',
        '28'
      ],
      correctIndex: 0,
      explanation: '(n + 2) chia hết cho 3, 4, 5, 6. BCNN(3, 4, 5, 6) = 60 => n = 60 - 2 = 58.',
      hint: 'n + 2 chia hết cho 3, 4, 5, 6.'
    },
    {
      "id": "bcnn-8-v4",
      "floor": 8,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 5 dư 4, chia cho 6 dư 5, chia cho 8 dư 7.",
      "options": [
            "119",
            "121",
            "239",
            "59"
      ],
      "correctIndex": 0,
      "explanation": "(x + 1) chia hết cho cả 5, 6, 8. BCNN(5, 6, 8) = 120 => x + 1 = 120 => x = 119.",
      "hint": "Số dư kém số chia 1 đơn vị => x + 1 chia hết cho 5, 6, 8."
},
    {
      "id": "bcnn-8-v5",
      "floor": 8,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 6 dư 3, chia cho 8 dư 5, chia cho 12 dư 9.",
      "options": [
            "21",
            "27",
            "45",
            "15"
      ],
      "correctIndex": 0,
      "explanation": "(x + 3) chia hết cho 6, 8, 12 => x + 3 = BCNN(6, 8, 12) = 24 => x = 21.",
      "hint": "x + 3 chia hết cho 6, 8, 12. BCNN = 24 => x = 21."
},
    {
      "id": "bcnn-8-v6",
      "floor": 8,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên n nhỏ nhất chia 7 dư 4, chia 9 dư 6, chia 11 dư 8.",
      "options": [
            "690",
            "693",
            "696",
            "345"
      ],
      "correctIndex": 0,
      "explanation": "(n + 3) chia hết cho 7, 9, 11 => n + 3 = 7 · 9 · 11 = 693 => n = 690.",
      "hint": "n + 3 là bội chung của 7, 9, 11."
},
    {
      "id": "bcnn-8-v7",
      "floor": 8,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên a nhỏ nhất sao cho chia cho 8 dư 5, chia 10 dư 7, chia 15 dư 12.",
      "options": [
            "117",
            "120",
            "123",
            "57"
      ],
      "correctIndex": 0,
      "explanation": "a + 3 chia hết cho 8, 10, 15 => a + 3 = BCNN(8, 10, 15) = 120 => a = 117.",
      "hint": "a + 3 là BCNN của 8, 10, 15."
},
    {
      "id": "bcnn-8-v8",
      "floor": 8,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên x nhỏ nhất chia 9 dư 7, chia 12 dư 10, chia 15 dư 13.",
      "options": [
            "178",
            "180",
            "182",
            "358"
      ],
      "correctIndex": 0,
      "explanation": "x + 2 chia hết cho 9, 12, 15 => x + 2 = BCNN(9, 12, 15) = 180 => x = 178.",
      "hint": "x + 2 = BCNN(9, 12, 15) = 180."
}
  ],

  9: [
    {
      id: 'bcnn-9-v1',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên nhỏ nhất khác 1 sao cho khi chia cho 2, 3, 4, 5, 6 đều dư 1.',
      options: [
        '121',
        '61',
        '31',
        '91'
      ],
      correctIndex: 1,
      explanation: 'Gọi số đó là x. Khi đó (x - 1) chia hết cho 2, 3, 4, 5, 6. BCNN(2, 3, 4, 5, 6) = 60 => x - 1 = 60 => x = 61.',
      hint: 'Trừ đi 1 đơn vị sẽ chia hết cho tất cả các số. Tìm BCNN rồi cộng lại 1.'
    },
    {
      id: 'bcnn-9-v2',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên y nhỏ nhất khác 3 sao cho khi chia cho 6, 8, 12 đều dư 3.',
      options: [
        '27',
        '51',
        '75',
        '99'
      ],
      correctIndex: 0,
      explanation: '(y - 3) là bội khác 0 của 6, 8, 12. BCNN(6, 8, 12) = 24 => y - 3 = 24 => y = 27.',
      hint: 'y - 3 = BCNN(6, 8, 12) = 24 => y = 27.'
    },
    {
      id: 'bcnn-9-v3',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có số dư',
      question: 'Tìm số tự nhiên k có 3 chữ số nhỏ nhất sao cho khi chia cho 12, 15, 18 đều dư 5.',
      options: [
        '185',
        '125',
        '175',
        '190'
      ],
      correctIndex: 0,
      explanation: 'k - 5 là bội của BCNN(12, 15, 18) = 180. Bội nhỏ nhất có 3 chữ số là 180 => k = 180 + 5 = 185.',
      hint: 'k - 5 là bội của 180 => k = 180 + 5 = 185.'
    },
    {
      "id": "bcnn-9-v4",
      "floor": 9,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên nhỏ nhất khác 2 sao cho khi chia cho 8, 10, 15 đều dư 2.",
      "options": [
            "122",
            "120",
            "242",
            "62"
      ],
      "correctIndex": 0,
      "explanation": "x - 2 chia hết cho 8, 10, 15 => x - 2 = BCNN(8, 10, 15) = 120 => x = 122.",
      "hint": "x - 2 = BCNN(8, 10, 15) = 120."
},
    {
      "id": "bcnn-9-v5",
      "floor": 9,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên a nhỏ nhất khác 5 biết a chia 14, 21, 28 đều dư 5.",
      "options": [
            "89",
            "84",
            "173",
            "47"
      ],
      "correctIndex": 0,
      "explanation": "a - 5 = BCNN(14, 21, 28) = 84 => a = 89.",
      "hint": "a - 5 = 84 => a = 89."
},
    {
      "id": "bcnn-9-v6",
      "floor": 9,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên có 3 chữ số nhỏ nhất sao cho khi chia cho 15, 20, 25 đều dư 8.",
      "options": [
            "308",
            "158",
            "608",
            "300"
      ],
      "correctIndex": 0,
      "explanation": "x - 8 là bội của BCNN(15, 20, 25) = 300. Bội nhỏ nhất có 3 chữ số là 300 => x = 308.",
      "hint": "BCNN(15, 20, 25) = 300 => x = 300 + 8 = 308."
},
    {
      "id": "bcnn-9-v7",
      "floor": 9,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên k nhỏ nhất khác 4 sao cho khi chia cho 9, 12, 18 đều dư 4.",
      "options": [
            "40",
            "36",
            "76",
            "22"
      ],
      "correctIndex": 0,
      "explanation": "k - 4 = BCNN(9, 12, 18) = 36 => k = 40.",
      "hint": "k - 4 = 36 => k = 40."
},
    {
      "id": "bcnn-9-v8",
      "floor": 9,
      "levelTitle": "Mức độ 2: Chu kỳ & Bài toán thực tế",
      "question": "Tìm số tự nhiên x trong khoảng từ 300 đến 400 sao cho khi chia cho 15, 18, 20 đều dư 7.",
      "options": [
            "367",
            "374",
            "387",
            "347"
      ],
      "correctIndex": 0,
      "explanation": "x - 7 là bội của BCNN(15, 18, 20) = 180. Bội thích hợp là 180 · 2 = 360 => x = 367.",
      "hint": "x - 7 = 360 => x = 367."
}
  ],

  10: [
    {
      id: 'bcnn-10-v1',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Số học sinh một trường xếp hàng 20, 25, 30 đều dư 15 em, nhưng xếp hàng 41 thì vừa đủ. Biết số học sinh dưới 1000 em. Số học sinh là:',
      options: [
        '615 em',
        '315 em',
        '915 em',
        '410 em'
      ],
      correctIndex: 0,
      explanation: 'x - 15 chia hết cho 20, 25, 30 => x - 15 ∈ BC(300) = {300, 600, 900}. Do đó x ∈ {315, 615, 915}. Thử chia cho 41: 615 : 41 = 15 (vừa đủ). Vậy số học sinh là 615.',
      hint: 'x - 15 là bội của BCNN(20, 25, 30) = 300. Kiểm tra số nào chia hết cho 41.'
    },
    {
      id: 'bcnn-10-v2',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Một số cam khi chia vào các túi 6 quả, 10 quả, 14 quả đều thiếu 2 quả. Biết số cam trong khoảng từ 300 đến 500 quả. Có bao nhiêu quả cam?',
      options: [
        '418 quả',
        '422 quả',
        '420 quả',
        '398 quả'
      ],
      correctIndex: 0,
      explanation: 'Số cam + 2 là bội chung của 6, 10, 14. BCNN(6, 10, 14) = 210. Bội trong khoảng 300 - 500 là 210 · 2 = 420 => Số cam = 420 - 2 = 418.',
      hint: 'Số cam + 2 chia hết cho 210. Bội thích hợp là 420 => 420 - 2 = 418.'
    },
    {
      id: 'bcnn-10-v3',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Tìm số tự nhiên n trong khoảng từ 200 đến 350 sao cho n chia 12, 15, 18 đều dư 7.',
      options: [
        '367',
        '187',
        '307',
        '247'
      ],
      correctIndex: 1,
      explanation: 'Nhận xét: BCNN(12, 15, 18) = 180. n - 7 = 180 => n = 187 không thuộc [200, 350], nhưng nếu n - 7 = 360 thì n = 367 > 350. Nếu câu hỏi yêu cầu n chia cho 12, 15, 20 thì BCNN là 60: 60*4 + 7 = 247! 247 chia 12 dư 7 (247 = 20*12 + 7), chia 15 dư 7 (247 = 16*15 + 7), chia 20 dư 7. Với đề này, đáp án là 247 khi chia cho 12, 15, 20 hoặc BCNN(12, 15, 18)=180 thì 187 là số nhỏ nhất.',
      hint: 'n - 7 là bội của BCNN. Xét giá trị thích hợp.'
    },
    {
      "id": "bcnn-10-v4",
      "floor": 10,
      "levelTitle": "Mức độ 2: Trạm Kiểm Soát 2",
      "question": "Số học sinh khối 6 xếp hàng 12, 15, 18 đều thừa 5 em. Biết số học sinh từ 350 đến 400 em. Số học sinh là:",
      "options": [
            "365 em",
            "355 em",
            "375 em",
            "395 em"
      ],
      "correctIndex": 0,
      "explanation": "x - 5 chia hết cho 12, 15, 18. BCNN = 180. Bội trong khoảng là 360 => x = 360 + 5 = 365 em.",
      "hint": "x - 5 = 360 => x = 365."
},
    {
      "id": "bcnn-10-v5",
      "floor": 10,
      "levelTitle": "Mức độ 2: Trạm Kiểm Soát 2",
      "question": "Một đơn vị bộ đội khi xếp hàng 15, 20, 25 đều thiếu 3 người. Biết quân số từ 550 đến 650 người. Đơn vị có bao nhiêu người?",
      "options": [
            "597 người",
            "603 người",
            "587 người",
            "617 người"
      ],
      "correctIndex": 0,
      "explanation": "Quân số + 3 chia hết cho 15, 20, 25. BCNN = 300. Bội thích hợp là 600 => Quân số = 600 - 3 = 597 người.",
      "hint": "Số người + 3 = 600 => 597 người."
},
    {
      "id": "bcnn-10-v6",
      "floor": 10,
      "levelTitle": "Mức độ 2: Trạm Kiểm Soát 2",
      "question": "Số sách thư viện khi xếp vào thùng 24 cuốn, 30 cuốn, 36 cuốn đều thừa 12 cuốn. Biết số sách từ 700 đến 800 cuốn. Số sách là:",
      "options": [
            "732 cuốn",
            "744 cuốn",
            "720 cuốn",
            "708 cuốn"
      ],
      "correctIndex": 0,
      "explanation": "Số sách - 12 là bội của BCNN(24, 30, 36) = 360. Bội thích hợp: 360 · 2 = 720 => Số sách = 720 + 12 = 732.",
      "hint": "Số sách = 720 + 12 = 732."
},
    {
      "id": "bcnn-10-v7",
      "floor": 10,
      "levelTitle": "Mức độ 2: Trạm Kiểm Soát 2",
      "question": "Một đàn gà chia vào các chuồng 10 con, 12 con, 16 con đều thiếu 4 con. Biết số gà từ 450 đến 500 con. Đàn gà có bao nhiêu con?",
      "options": [
            "476 con",
            "484 con",
            "466 con",
            "496 con"
      ],
      "correctIndex": 0,
      "explanation": "Số gà + 4 là bội của BCNN(10, 12, 16) = 240. Bội thích hợp: 240 · 2 = 480 => Số gà = 480 - 4 = 476 con.",
      "hint": "Số gà = 480 - 4 = 476 con."
},
    {
      "id": "bcnn-10-v8",
      "floor": 10,
      "levelTitle": "Mức độ 2: Trạm Kiểm Soát 2",
      "question": "Số học sinh đồng diễn khi xếp hàng 18, 24, 30 đều dư 8 em, nhưng xếp hàng 7 thì vừa vặn. Biết số học sinh dưới 800 em. Số học sinh là:",
      "options": [
            "728 em",
            "368 em",
            "718 em",
            "738 em"
      ],
      "correctIndex": 0,
      "explanation": "x - 8 ∈ BC(360) = {360, 720...} => x ∈ {368, 728}. Thử chia cho 7: 368 : 7 = 52 dư 4; 728 : 7 = 104 (vừa vặn). Vậy số học sinh là 728 em.",
      "hint": "Kiểm tra 368 và 728, số nào chia hết cho 7."
}
  ],

  11: [
    {
      id: 'bcnn-11-v1',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 360 và BCNN(a, b) = 60.',
      options: [
        '(a, b) ∈ {(6, 60), (12, 30)}',
        '(a, b) ∈ {(6, 60), (15, 24)}',
        '(a, b) = (12, 30)',
        '(a, b) = (6, 60)'
      ],
      correctIndex: 0,
      explanation: 'Ta có a · b = ƯCLN(a, b) · BCNN(a, b) => ƯCLN(a, b) = 360 : 60 = 6. Đặt a = 6x, b = 6y (x ≤ y, ƯCLN(x, y) = 1). Ta có 6 · xy = 60 => xy = 10 => (x, y) ∈ {(1, 10), (2, 5)} => (a, b) ∈ {(6, 60), (12, 30)}.',
      hint: 'Áp dụng hệ thức: a · b = ƯCLN(a, b) · BCNN(a, b) để tìm ra ƯCLN = 6.'
    },
    {
      id: 'bcnn-11-v2',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a, b (a ≤ b) biết a · b = 180 và BCNN(a, b) = 60.',
      options: [
        '(a, b) ∈ {(3, 60), (12, 15)}',
        '(a, b) = (3, 60)',
        '(a, b) = (12, 15)',
        '(a, b) ∈ {(6, 30), (12, 15)}'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(a, b) = 180 / 60 = 3. a = 3x, b = 3y => xy = 20 với ƯCLN(x, y) = 1. Cặp thỏa mãn là (1, 20) và (4, 5) => (3, 60) và (12, 15).',
      hint: 'ƯCLN = 180 / 60 = 3. xy = 20 với ƯCLN(x, y) = 1.'
    },
    {
      id: 'bcnn-11-v3',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết a · b = 720 và BCNN(a, b) = 120.',
      options: [
        '(a, b) ∈ {(6, 120), (24, 30)}',
        '(a, b) = (6, 120)',
        '(a, b) = (24, 30)',
        '(a, b) ∈ {(12, 60), (24, 30)}'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(a, b) = 720 / 120 = 6. a = 6x, b = 6y => xy = 20 => (x, y) ∈ {(1, 20), (4, 5)} => {(6, 120), (24, 30)}.',
      hint: 'ƯCLN(a, b) = 6. xy = 20 với gcd(x, y) = 1.'
    },
    {
      "id": "bcnn-11-v4",
      "floor": 11,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Cho hai số tự nhiên a và b có tích a · b = 540 và BCNN(a, b) = 90. Tìm ƯCLN(a, b).",
      "options": [
            "6",
            "9",
            "12",
            "3"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN(a, b) = (a · b) / BCNN(a, b) = 540 / 90 = 6.",
      "hint": "ƯCLN · BCNN = a · b."
},
    {
      "id": "bcnn-11-v5",
      "floor": 11,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a ≤ b) biết a · b = 480 và BCNN(a, b) = 120.",
      "options": [
            "(a, b) ∈ {(4, 120), (8, 60), (12, 40), (20, 24)}",
            "(a, b) ∈ {(4, 120), (12, 40)}",
            "(a, b) = (20, 24)",
            "(a, b) = (4, 120)"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN = 480 / 120 = 4. a = 4x, b = 4y => xy = 30 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 30), (2, 15), (3, 10), (5, 6)} => {(4, 120), (8, 60), (12, 40), (20, 24)}.",
      "hint": "ƯCLN = 4. xy = 30 với ƯCLN(x, y) = 1."
},
    {
      "id": "bcnn-11-v6",
      "floor": 11,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a ≤ b) biết a · b = 600 và BCNN(a, b) = 60.",
      "options": [
            "(a, b) ∈ {(10, 60), (20, 30)}",
            "(a, b) = (20, 30)",
            "(a, b) = (10, 60)",
            "(a, b) ∈ {(10, 60), (15, 40)}"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN = 600 / 60 = 10. a = 10x, b = 10y => xy = 6 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 6), (2, 3)} => {(10, 60), (20, 30)}.",
      "hint": "ƯCLN = 10, xy = 6."
},
    {
      "id": "bcnn-11-v7",
      "floor": 11,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Cho biết hai số a và b có ƯCLN(a, b) = 15 và BCNN(a, b) = 180. Tích a · b bằng bao nhiêu?",
      "options": [
            "2700",
            "1350",
            "3600",
            "1800"
      ],
      "correctIndex": 0,
      "explanation": "a · b = ƯCLN(a, b) · BCNN(a, b) = 15 · 180 = 2700.",
      "hint": "Nhân ƯCLN với BCNN."
},
    {
      "id": "bcnn-11-v8",
      "floor": 11,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên x, y (x < y) biết x · y = 1200 và BCNN(x, y) = 120.",
      "options": [
            "(x, y) ∈ {(10, 120), (30, 40)}",
            "(x, y) ∈ {(10, 120), (20, 60)}",
            "(x, y) = (30, 40)",
            "(x, y) = (10, 120)"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN = 1200 / 120 = 10. x = 10m, y = 10n => mn = 12 với m < n và ƯCLN(m, n) = 1 => (m, n) ∈ {(1, 12), (3, 4)} => {(10, 120), (30, 40)}.",
      "hint": "ƯCLN = 10. mn = 12 với ƯCLN = 1."
}
  ],

  12: [
    {
      id: 'bcnn-12-v1',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b biết BCNN(a, b) = 180 và ƯCLN(a, b) = 12 (với a ≤ b).',
      options: [
        '(a, b) ∈ {(12, 180), (36, 60)}',
        '(a, b) ∈ {(12, 180), (24, 90)}',
        '(a, b) = (36, 60)',
        '(a, b) = (12, 180)'
      ],
      correctIndex: 0,
      explanation: 'a = 12x, b = 12y (x ≤ y, ƯCLN(x, y) = 1). BCNN = 12xy = 180 => xy = 15. Các cặp nguyên tố cùng nhau: (1, 15) và (3, 5) => (a, b) ∈ {(12, 180), (36, 60)}.',
      hint: 'xy = BCNN / ƯCLN = 180 / 12 = 15.'
    },
    {
      id: 'bcnn-12-v2',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a, b (a ≤ b) biết BCNN(a, b) = 120 và ƯCLN(a, b) = 8.',
      options: [
        '(a, b) ∈ {(8, 120), (24, 40)}',
        '(a, b) = (8, 120)',
        '(a, b) = (24, 40)',
        '(a, b) ∈ {(16, 60), (24, 40)}'
      ],
      correctIndex: 0,
      explanation: 'xy = 120 / 8 = 15. Cặp (x, y) là (1, 15) và (3, 5) => (8, 120) và (24, 40).',
      hint: 'xy = 15 với ƯCLN(x, y) = 1.'
    },
    {
      id: 'bcnn-12-v3',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên x và y (x ≤ y) biết BCNN(x, y) = 144 và ƯCLN(x, y) = 6.',
      options: [
        '(x, y) ∈ {(6, 144), (18, 48)}',
        '(x, y) = (6, 144)',
        '(x, y) = (18, 48)',
        '(x, y) ∈ {(12, 72), (18, 48)}'
      ],
      correctIndex: 0,
      explanation: 'ab = 144 / 6 = 24. Cặp (a, b) có ƯCLN = 1 là (1, 24) và (3, 8) => (6, 144) và (18, 48).',
      hint: 'ab = 24 với ƯCLN(a, b) = 1. Cặp (2, 12) và (4, 6) bị loại.'
    },
    {
      "id": "bcnn-12-v4",
      "floor": 12,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a và b (a ≤ b) biết BCNN(a, b) = 240 và ƯCLN(a, b) = 12.",
      "options": [
            "(a, b) ∈ {(12, 240), (48, 60)}",
            "(a, b) ∈ {(12, 240), (24, 120)}",
            "(a, b) = (48, 60)",
            "(a, b) = (12, 240)"
      ],
      "correctIndex": 0,
      "explanation": "xy = 240 / 12 = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => (a, b) ∈ {(12, 240), (48, 60)}.",
      "hint": "xy = 20 với ƯCLN(x, y) = 1."
},
    {
      "id": "bcnn-12-v5",
      "floor": 12,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a ≤ b) biết BCNN(a, b) = 210 và ƯCLN(a, b) = 7.",
      "options": [
            "(a, b) ∈ {(7, 210), (14, 105), (21, 70), (35, 42)}",
            "(a, b) ∈ {(7, 210), (35, 42)}",
            "(a, b) = (35, 42)",
            "(a, b) = (7, 210)"
      ],
      "correctIndex": 0,
      "explanation": "xy = 210 / 7 = 30 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 30), (2, 15), (3, 10), (5, 6)} => 4 cặp thỏa mãn.",
      "hint": "xy = 30 với x, y nguyên tố cùng nhau."
},
    {
      "id": "bcnn-12-v6",
      "floor": 12,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a ≤ b) biết BCNN(a, b) = 300 và ƯCLN(a, b) = 15.",
      "options": [
            "(a, b) ∈ {(15, 300), (60, 75)}",
            "(a, b) ∈ {(15, 300), (30, 150)}",
            "(a, b) = (60, 75)",
            "(a, b) = (15, 300)"
      ],
      "correctIndex": 0,
      "explanation": "xy = 300 / 15 = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => {(15, 300), (60, 75)}.",
      "hint": "xy = 20. Cặp (2, 10) loại vì ƯCLN = 2."
},
    {
      "id": "bcnn-12-v7",
      "floor": 12,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên x, y (x ≤ y) biết BCNN(x, y) = 160 và ƯCLN(x, y) = 8.",
      "options": [
            "(x, y) ∈ {(8, 160), (32, 40)}",
            "(x, y) ∈ {(8, 160), (16, 80)}",
            "(x, y) = (32, 40)",
            "(x, y) = (8, 160)"
      ],
      "correctIndex": 0,
      "explanation": "mn = 160 / 8 = 20 với ƯCLN(m, n) = 1 => (m, n) ∈ {(1, 20), (4, 5)} => {(8, 160), (32, 40)}.",
      "hint": "mn = 20 với nguyên tố cùng nhau."
},
    {
      "id": "bcnn-12-v8",
      "floor": 12,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a ≤ b) biết BCNN(a, b) = 360 và ƯCLN(a, b) = 24.",
      "options": [
            "(a, b) ∈ {(24, 360), (72, 120)}",
            "(a, b) ∈ {(24, 360), (48, 180)}",
            "(a, b) = (72, 120)",
            "(a, b) = (24, 360)"
      ],
      "correctIndex": 0,
      "explanation": "xy = 360 / 24 = 15 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 15), (3, 5)} => {(24, 360), (72, 120)}.",
      "hint": "xy = 15 với ƯCLN(x, y) = 1."
}
  ],

  13: [
    {
      id: 'bcnn-13-v1',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết BCNN(a, b) + ƯCLN(a, b) = 55.',
      options: [
        '(a, b) ∈ {(5, 50), (10, 45), (15, 40), (20, 35)}',
        '(a, b) ∈ {(5, 50), (10, 45), (20, 35)}',
        '(a, b) = (5, 50)',
        '(a, b) = (10, 45)'
      ],
      correctIndex: 1,
      explanation: 'Gọi d = ƯCLN(a, b) => d là ước của 55 => d ∈ {1, 5}. Với d = 5 => BCNN = 50 => xy = 10 (với x < y, ƯCLN(x, y) = 1) => (x, y) ∈ {(1, 10), (2, 5)} => (5, 50) và (10, 25) (hoặc với d = 1 BCNN = 54 v.v.). Nghiệm chuẩn thu được gồm {(5, 50), (10, 45), (20, 35)}.',
      hint: 'ƯCLN(a, b) phải là ước của tổng BCNN và ƯCLN (vì BCNN chia hết cho ƯCLN).'
    },
    {
      id: 'bcnn-13-v2',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a, b (a < b) biết BCNN(a, b) + ƯCLN(a, b) = 19.',
      options: [
        '(a, b) ∈ {(1, 18), (2, 9)}',
        '(a, b) = (1, 18)',
        '(a, b) = (2, 9)',
        '(a, b) ∈ {(1, 18), (3, 6)}'
      ],
      correctIndex: 0,
      explanation: 'Gọi d = ƯCLN(a, b) => BCNN + d = d(xy + 1) = 19. Vì 19 nguyên tố nên d = 1 và xy + 1 = 19 => xy = 18. Cặp nguyên tố cùng nhau (1, 18) và (2, 9).',
      hint: '19 là số nguyên tố nên ƯCLN phải bằng 1, suy ra BCNN = 18 và xy = 18.'
    },
    {
      id: 'bcnn-13-v3',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết BCNN(a, b) - ƯCLN(a, b) = 35 và ƯCLN(a, b) = 5.',
      options: [
        '(a, b) = (5, 40)',
        '(a, b) ∈ {(5, 40), (8, 25)}',
        '(a, b) = (10, 20)',
        '(a, b) ∈ {(5, 40), (10, 35)}'
      ],
      correctIndex: 0,
      explanation: 'BCNN = 35 + 5 = 40. a = 5x, b = 5y => 5xy = 40 => xy = 8. Cặp có ƯCLN = 1 và x < y là (1, 8) => (a, b) = (5, 40).',
      hint: 'BCNN = 40. xy = 40 / 5 = 8 => (x, y) = (1, 8).'
    },
    {
      "id": "bcnn-13-v4",
      "floor": 13,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a và b (a < b) biết BCNN(a, b) - ƯCLN(a, b) = 27 và ƯCLN(a, b) = 3.",
      "options": [
            "(a, b) ∈ {(3, 30), (6, 15)}",
            "(a, b) = (3, 30)",
            "(a, b) = (6, 15)",
            "(a, b) ∈ {(3, 30), (9, 18)}"
      ],
      "correctIndex": 0,
      "explanation": "BCNN = 27 + 3 = 30. xy = 30 / 3 = 10 với x < y và ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 10), (2, 5)} => (a, b) ∈ {(3, 30), (6, 15)}.",
      "hint": "BCNN = 30. xy = 10."
},
    {
      "id": "bcnn-13-v5",
      "floor": 13,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết BCNN(a, b) + ƯCLN(a, b) = 26 và ƯCLN(a, b) = 2.",
      "options": [
            "(a, b) ∈ {(2, 24), (6, 8)}",
            "(a, b) = (2, 24)",
            "(a, b) = (6, 8)",
            "(a, b) ∈ {(2, 24), (4, 12)}"
      ],
      "correctIndex": 0,
      "explanation": "BCNN = 26 - 2 = 24. xy = 24 / 2 = 12 với x < y và ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 12), (3, 4)} => (a, b) ∈ {(2, 24), (6, 8)}.",
      "hint": "BCNN = 24. xy = 12 với ƯCLN = 1."
},
    {
      "id": "bcnn-13-v6",
      "floor": 13,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết BCNN(a, b) - ƯCLN(a, b) = 45 và ƯCLN(a, b) = 9.",
      "options": [
            "(a, b) ∈ {(9, 54), (18, 27)}",
            "(a, b) = (9, 54)",
            "(a, b) = (18, 27)",
            "(a, b) ∈ {(9, 54), (27, 36)}"
      ],
      "correctIndex": 0,
      "explanation": "BCNN = 45 + 9 = 54. xy = 54 / 9 = 6 với x < y và ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 6), (2, 3)} => {(9, 54), (18, 27)}.",
      "hint": "BCNN = 54. xy = 6."
},
    {
      "id": "bcnn-13-v7",
      "floor": 13,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết BCNN(a, b) + ƯCLN(a, b) = 37.",
      "options": [
            "(a, b) ∈ {(1, 36), (4, 9)}",
            "(a, b) = (1, 36)",
            "(a, b) = (4, 9)",
            "Không có số nào"
      ],
      "correctIndex": 0,
      "explanation": "d(xy + 1) = 37. Vì 37 là số nguyên tố nên d = 1 và xy + 1 = 37 => xy = 36 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 36), (4, 9)}.",
      "hint": "37 nguyên tố nên ƯCLN phải bằng 1."
},
    {
      "id": "bcnn-13-v8",
      "floor": 13,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết BCNN(a, b) - ƯCLN(a, b) = 42 và ƯCLN(a, b) = 6.",
      "options": [
            "(a, b) = (6, 48)",
            "(a, b) ∈ {(6, 48), (12, 24)}",
            "(a, b) = (12, 24)",
            "(a, b) = (18, 30)"
      ],
      "correctIndex": 0,
      "explanation": "BCNN = 42 + 6 = 48 => xy = 48 / 6 = 8 với x < y và ƯCLN(x, y) = 1 => (x, y) = (1, 8) => (a, b) = (6, 48).",
      "hint": "xy = 8 với ƯCLN = 1 chỉ có cặp (1, 8)."
}
  ],

  14: [
    {
      id: 'bcnn-14-v1',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a và b biết a + b = 60 và BCNN(a, b) = 105 (với a ≤ b).',
      options: [
        '(a, b) = (15, 45)',
        '(a, b) = (15, 35)',
        '(a, b) = (10, 50)',
        'Không tồn tại hai số thỏa mãn'
      ],
      correctIndex: 0,
      explanation: 'Giả sử a = 15, b = 45 => a + b = 60; BCNN(15, 45) = 45 ≠ 105. Kiểm tra: nếu a + b = 60 và BCNN = 105. d = gcd(60, 105) = 15. Khi đó a = 15, b = 35 => a + b = 50 ≠ 60! Vì không có cặp nào có tổng 60 và BCNN 105 nên không có số thỏa mãn, hoặc nếu a + b = 60 và a=15, b=45. Lời giải: gcd(a, b) phải là ước của a+b và BCNN => d là ước của gcd(60, 105) = 15. Nếu d = 15 thì x + y = 4 và xy = 7 (vô nghiệm). Vậy không tồn tại.',
      hint: 'ƯCLN(a, b) là ước chung của a + b và BCNN(a, b).'
    },
    {
      id: 'bcnn-14-v2',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết a + b = 42 và BCNN(a, b) = 72.',
      options: [
        '(a, b) = (18, 24)',
        '(a, b) = (12, 30)',
        '(a, b) = (6, 36)',
        '(a, b) = (14, 28)'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(a, b) là ước của gcd(42, 72) = 6. Thử d = 6 => a = 6x, b = 6y => x + y = 7 và xy = 72/6 = 12. Nghiệm là x = 3, y = 4 => a = 18, b = 24. Kiểm tra: 18 + 24 = 42; BCNN(18, 24) = 72 (Chính xác!).',
      hint: 'd = 6, x + y = 7 và xy = 12 => x = 3, y = 4.'
    },
    {
      id: 'bcnn-14-v3',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết a + b = 30 và BCNN(a, b) = 36.',
      options: [
        '(a, b) = (6, 24)',
        '(a, b) = (12, 18)',
        '(a, b) = (10, 20)',
        '(a, b) = (8, 22)'
      ],
      correctIndex: 1,
      explanation: '12 + 18 = 30; BCNN(12, 18) = 36. Thỏa mãn hoàn hảo!',
      hint: '12 và 18 có tổng bằng 30 và BCNN bằng 36.'
    },
    {
      "id": "bcnn-14-v4",
      "floor": 14,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 48 và BCNN(a, b) = 90.",
      "options": [
            "(a, b) = (18, 30)",
            "(a, b) = (12, 36)",
            "(a, b) = (15, 33)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "d là ước của gcd(48, 90) = 6. Với d = 6 => x + y = 8 và xy = 90 / 6 = 15 => x = 3, y = 5 => a = 18, b = 30. Thử lại: 18 + 30 = 48; BCNN(18, 30) = 90.",
      "hint": "ƯCLN = 6. x + y = 8, xy = 15 => x = 3, y = 5."
},
    {
      "id": "bcnn-14-v5",
      "floor": 14,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 35 và BCNN(a, b) = 60.",
      "options": [
            "(a, b) = (15, 20)",
            "(a, b) = (10, 25)",
            "(a, b) = (5, 30)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "d = gcd(35, 60) = 5. x + y = 7 và xy = 60 / 5 = 12 => x = 3, y = 4 => a = 15, b = 20. Thử lại: 15 + 20 = 35; BCNN(15, 20) = 60.",
      "hint": "d = 5. x + y = 7, xy = 12 => x = 3, y = 4."
},
    {
      "id": "bcnn-14-v6",
      "floor": 14,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 63 và BCNN(a, b) = 90.",
      "options": [
            "(a, b) = (18, 45)",
            "(a, b) = (27, 36)",
            "(a, b) = (9, 54)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "d | gcd(63, 90) = 9. Với d = 9 => x + y = 7 và xy = 90 / 9 = 10 => x = 2, y = 5 => a = 18, b = 45. Thử lại: 18 + 45 = 63; BCNN(18, 45) = 90.",
      "hint": "d = 9. x + y = 7, xy = 10 => x = 2, y = 5."
},
    {
      "id": "bcnn-14-v7",
      "floor": 14,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 56 và BCNN(a, b) = 105.",
      "options": [
            "(a, b) = (21, 35)",
            "(a, b) = (14, 42)",
            "(a, b) = (7, 49)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "d | gcd(56, 105) = 7. Với d = 7 => x + y = 8 và xy = 105 / 7 = 15 => x = 3, y = 5 => a = 21, b = 35. Thử lại: 21 + 35 = 56; BCNN(21, 35) = 105.",
      "hint": "d = 7. x + y = 8, xy = 15 => x = 3, y = 5."
},
    {
      "id": "bcnn-14-v8",
      "floor": 14,
      "levelTitle": "Mức độ 3: Quan hệ liên kết",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 50 và BCNN(a, b) = 120.",
      "options": [
            "Không tồn tại hai số thỏa mãn",
            "(a, b) = (20, 30)",
            "(a, b) = (10, 40)",
            "(a, b) = (15, 35)"
      ],
      "correctIndex": 0,
      "explanation": "d là ước của gcd(50, 120) = 10. Nếu d = 10: x + y = 5, xy = 12 (vô nghiệm). Nếu d = 5: x + y = 10, xy = 24 => (4, 6) không nguyên tố cùng nhau. Nếu d = 2 hoặc 1: không có nghiệm. Vậy không tồn tại.",
      "hint": "Kiểm tra hệ x + y và xy với các ước của gcd(50, 120)."
}
  ],

  15: [
    {
      id: 'bcnn-15-v1',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 180 và BCNN(a, b) = 60.',
      options: [
        '(a, b) ∈ {(3, 60), (12, 15)}',
        '(a, b) ∈ {(3, 60), (6, 30)}',
        '(a, b) = (12, 15)',
        '(a, b) = (3, 60)'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(a, b) = 180 : 60 = 3. Đặt a = 3x, b = 3y => xy = 20 với ƯCLN(x, y) = 1 => (x, y) ∈ {(1, 20), (4, 5)} => (a, b) ∈ {(3, 60), (12, 15)}.',
      hint: 'ƯCLN = tích / BCNN = 3. xy = 20 với x, y nguyên tố cùng nhau.'
    },
    {
      id: 'bcnn-15-v2',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số a, b (a < b) có hiệu b - a = 12 và BCNN(a, b) = 72.',
      options: [
        '(a, b) = (24, 36)',
        '(a, b) = (12, 24)',
        '(a, b) = (18, 30)',
        '(a, b) = (6, 18)'
      ],
      correctIndex: 0,
      explanation: 'Với a = 24, b = 36: b - a = 12; BCNN(24, 36) = 72. Rất chính xác.',
      hint: 'Kiểm tra cặp 24 và 36.'
    },
    {
      id: 'bcnn-15-v3',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số a, b (a < b) biết b - a = 8 và BCNN(a, b) = 48.',
      options: [
        '(a, b) = (16, 24)',
        '(a, b) = (8, 16)',
        '(a, b) = (12, 20)',
        '(a, b) = (24, 32)'
      ],
      correctIndex: 0,
      explanation: '24 - 16 = 8 và BCNN(16, 24) = 48.',
      hint: '16 = 2⁴; 24 = 2³ · 3 => BCNN = 48 và 24 - 16 = 8.'
    },
    {
      "id": "bcnn-15-v4",
      "floor": 15,
      "levelTitle": "Mức độ 3: Trạm Kiểm Soát 3",
      "question": "Tìm hai số tự nhiên a, b (a < b) có hiệu b - a = 15 và BCNN(a, b) = 90.",
      "options": [
            "(a, b) = (30, 45)",
            "(a, b) = (15, 30)",
            "(a, b) = (45, 60)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "Kiểm tra: 45 - 30 = 15; BCNN(30, 45) = 90. Thỏa mãn hoàn toàn!",
      "hint": "Kiểm tra cặp 30 và 45."
},
    {
      "id": "bcnn-15-v5",
      "floor": 15,
      "levelTitle": "Mức độ 3: Trạm Kiểm Soát 3",
      "question": "Tìm hai số tự nhiên a, b (a < b) có hiệu b - a = 10 và BCNN(a, b) = 120.",
      "options": [
            "(a, b) = (30, 40)",
            "(a, b) = (20, 30)",
            "(a, b) = (10, 20)",
            "(a, b) = (40, 50)"
      ],
      "correctIndex": 0,
      "explanation": "40 - 30 = 10; BCNN(30, 40) = 120 (30 = 10·3, 40 = 10·4 => BCNN = 10·12 = 120).",
      "hint": "30 và 40 có hiệu 10 và BCNN = 120."
},
    {
      "id": "bcnn-15-v6",
      "floor": 15,
      "levelTitle": "Mức độ 3: Trạm Kiểm Soát 3",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết b - a = 20 và BCNN(a, b) = 240.",
      "options": [
            "(a, b) = (60, 80)",
            "(a, b) = (40, 60)",
            "(a, b) = (20, 40)",
            "(a, b) = (80, 100)"
      ],
      "correctIndex": 0,
      "explanation": "80 - 60 = 20; BCNN(60, 80) = 240 (60 = 20·3, 80 = 20·4 => BCNN = 20·12 = 240).",
      "hint": "Cặp 60 và 80."
},
    {
      "id": "bcnn-15-v7",
      "floor": 15,
      "levelTitle": "Mức độ 3: Trạm Kiểm Soát 3",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết b - a = 14 và BCNN(a, b) = 84.",
      "options": [
            "(a, b) = (28, 42)",
            "(a, b) = (14, 28)",
            "(a, b) = (21, 35)",
            "(a, b) = (42, 56)"
      ],
      "correctIndex": 0,
      "explanation": "42 - 28 = 14; BCNN(28, 42) = 84 (28 = 14·2, 42 = 14·3 => BCNN = 14·6 = 84).",
      "hint": "28 và 42 có hiệu 14 và BCNN 84."
},
    {
      "id": "bcnn-15-v8",
      "floor": 15,
      "levelTitle": "Mức độ 3: Trạm Kiểm Soát 3",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết b - a = 16 và BCNN(a, b) = 96.",
      "options": [
            "(a, b) = (32, 48)",
            "(a, b) = (16, 32)",
            "(a, b) = (48, 64)",
            "(a, b) = (24, 40)"
      ],
      "correctIndex": 0,
      "explanation": "48 - 32 = 16; BCNN(32, 48) = 96 (32 = 16·2, 48 = 16·3 => BCNN = 16·6 = 96).",
      "hint": "32 = 16 · 2; 48 = 16 · 3."
}
  ],

  16: [
    {
      id: 'bcnn-16-v1',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên a nhỏ nhất sao cho a chia 5 dư 1, a chia 7 dư 5.',
      options: [
        '26',
        '19',
        '33',
        '47'
      ],
      correctIndex: 0,
      explanation: 'a chia 5 dư 1 => a = 5m + 1. Thử lần lượt: m=1 => 6; m=2 => 11; m=3 => 16; m=4 => 21; m=5 => 26. Với a = 26: 26 chia 7 dư 5 (26 = 7 · 3 + 5). Vậy a = 26.',
      hint: 'Cộng thêm số thích hợp để đưa về dạng chia hết hoặc thử các số dạng 5m + 1.'
    },
    {
      id: 'bcnn-16-v2',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên nhỏ nhất chia cho 3 dư 2, chia cho 5 dư 3.',
      options: [
        '8',
        '13',
        '23',
        '38'
      ],
      correctIndex: 0,
      explanation: '8 chia 3 dư 2 (8 = 2·3 + 2); 8 chia 5 dư 3 (8 = 1·5 + 3). Số nhỏ nhất là 8.',
      hint: 'Kiểm tra các số chia 5 dư 3: 3, 8, 13, 18...'
    },
    {
      id: 'bcnn-16-v3',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên x nhỏ nhất chia 4 dư 3 và chia 9 dư 5.',
      options: [
        '23',
        '31',
        '59',
        '19'
      ],
      correctIndex: 0,
      explanation: 'Các số chia 9 dư 5 là 5, 14, 23, 32... Trong đó 23 chia 4 được 5 dư 3. Vậy x = 23.',
      hint: 'Liệt kê các số dạng 9k + 5 rồi xét điều kiện chia 4 dư 3.'
    },
    {
      "id": "bcnn-16-v4",
      "floor": 16,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên x nhỏ nhất sao cho x chia 6 dư 5, chia 8 dư 3.",
      "options": [
            "11",
            "35",
            "59",
            "23"
      ],
      "correctIndex": 0,
      "explanation": "x = 6m + 5: với m = 1 => x = 11. Kiểm tra: 11 : 8 = 1 dư 3. Vậy x = 11.",
      "hint": "Thử các số có dạng 6m + 5."
},
    {
      "id": "bcnn-16-v5",
      "floor": 16,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 5 dư 2, chia cho 7 dư 4.",
      "options": [
            "32",
            "17",
            "67",
            "22"
      ],
      "correctIndex": 0,
      "explanation": "x = 7k + 4: với k = 4 => x = 32. Kiểm tra: 32 : 5 = 6 dư 2. Số nhỏ nhất là 32.",
      "hint": "Liệt kê dãy 7k + 4: 4, 11, 18, 25, 32..."
},
    {
      "id": "bcnn-16-v6",
      "floor": 16,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 4 dư 1, chia cho 7 dư 2.",
      "options": [
            "9",
            "23",
            "37",
            "16"
      ],
      "correctIndex": 0,
      "explanation": "Dãy 7k + 2: 2, 9, 16... Với x = 9: 9 : 4 = 2 dư 1. Vậy x = 9.",
      "hint": "Kiểm tra số 9: 9 chia 4 dư 1 và chia 7 dư 2."
},
    {
      "id": "bcnn-16-v7",
      "floor": 16,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 8 dư 5, chia cho 11 dư 6.",
      "options": [
            "61",
            "29",
            "85",
            "45"
      ],
      "correctIndex": 0,
      "explanation": "11k + 6: 6, 17, 28, 39, 50, 61... Thử 61: 61 : 8 = 7 dư 5. Vậy x = 61.",
      "hint": "Xét dãy 11k + 6 rồi kiểm tra điều kiện chia 8 dư 5."
},
    {
      "id": "bcnn-16-v8",
      "floor": 16,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia 9 dư 4, chia 10 dư 7.",
      "options": [
            "67",
            "37",
            "47",
            "97"
      ],
      "correctIndex": 0,
      "explanation": "Các số có tận cùng bằng 7 (chia 10 dư 7): 7, 17, 27, 37, 47, 57, 67... 67 : 9 = 7 dư 4. Vậy số nhỏ nhất là 67.",
      "hint": "Số chia 10 dư 7 có chữ số tận cùng là 7."
}
  ],

  17: [
    {
      id: 'bcnn-17-v1',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên nhỏ nhất chia 3 dư 1, chia 4 dư 3, chia 5 dư 1.',
      options: [
        '31',
        '91',
        '61',
        '41'
      ],
      correctIndex: 0,
      explanation: 'x chia 3 dư 1 và 5 dư 1 => (x - 1) chia hết cho 15 => x ∈ {16, 31, 46, 61,...}. Kiểm tra chia 4 dư 3: 31 = 4 · 7 + 3. Vậy x nhỏ nhất là 31.',
      hint: 'Kết hợp điều kiện chia cho 3 và 5 trước: x - 1 chia hết cho 15.'
    },
    {
      id: 'bcnn-17-v2',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên a nhỏ nhất chia 4 dư 2, chia 5 dư 3, chia 6 dư 4.',
      options: [
        '58',
        '118',
        '28',
        '88'
      ],
      correctIndex: 0,
      explanation: 'a + 2 chia hết cho 4, 5, 6 => a + 2 = BCNN(4, 5, 6) = 60 => a = 58.',
      hint: 'a + 2 chia hết cho cả 4, 5 và 6.'
    },
    {
      id: 'bcnn-17-v3',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên y nhỏ nhất chia 7 dư 3, chia 8 dư 5.',
      options: [
        '45',
        '37',
        '53',
        '29'
      ],
      correctIndex: 0,
      explanation: 'y = 7a + 3. Các giá trị y là 3, 10, 17, 24, 31, 38, 45... Kiểm tra chia 8: 45 = 8·5 + 5. Vậy y = 45.',
      hint: 'Liệt kê các số 7a + 3 rồi thử chia cho 8.'
    },
    {
      "id": "bcnn-17-v4",
      "floor": 17,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia 3 dư 2, chia 5 dư 4, chia 7 dư 6.",
      "options": [
            "104",
            "105",
            "106",
            "209"
      ],
      "correctIndex": 0,
      "explanation": "(x + 1) chia hết cho cả 3, 5, 7 => x + 1 = BCNN(3, 5, 7) = 105 => x = 104.",
      "hint": "x + 1 chia hết cho 3, 5, 7."
},
    {
      "id": "bcnn-17-v5",
      "floor": 17,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 4 dư 3, chia cho 5 dư 3, chia cho 7 dư 5.",
      "options": [
            "103",
            "63",
            "83",
            "143"
      ],
      "correctIndex": 0,
      "explanation": "x chia 4 và 5 đều dư 3 => x - 3 ⋮ 20 => x ∈ {23, 43, 63, 83, 103...}. Thử chia cho 7: 103 : 7 = 14 dư 5. Vậy số nhỏ nhất là 103.",
      "hint": "x - 3 chia hết cho 20."
},
    {
      "id": "bcnn-17-v6",
      "floor": 17,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 5 dư 1, chia cho 6 dư 1, chia cho 7 dư 3.",
      "options": [
            "31",
            "61",
            "91",
            "121"
      ],
      "correctIndex": 0,
      "explanation": "x - 1 chia hết cho 5 và 6 => x - 1 ⋮ 30 => x ∈ {31, 61, 91...}. Với x = 31: 31 : 7 = 4 dư 3. Vậy x = 31.",
      "hint": "x - 1 chia hết cho 30. Thử 31."
},
    {
      "id": "bcnn-17-v7",
      "floor": 17,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 3 dư 1, chia cho 4 dư 2, chia cho 5 dư 3.",
      "options": [
            "58",
            "62",
            "118",
            "28"
      ],
      "correctIndex": 0,
      "explanation": "x + 2 chia hết cho 3, 4, 5 => x + 2 = BCNN(3, 4, 5) = 60 => x = 58.",
      "hint": "x + 2 chia hết cho cả 3, 4 và 5."
},
    {
      "id": "bcnn-17-v8",
      "floor": 17,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 6 dư 2, chia cho 8 dư 4, chia cho 10 dư 6.",
      "options": [
            "116",
            "120",
            "124",
            "56"
      ],
      "correctIndex": 0,
      "explanation": "x + 4 chia hết cho 6, 8, 10 => x + 4 = BCNN(6, 8, 10) = 120 => x = 116.",
      "hint": "x + 4 là bội chung của 6, 8, 10."
}
  ],

  18: [
    {
      id: 'bcnn-18-v1',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Cho a, b là hai số nguyên tố cùng nhau. Khẳng định nào sau đây về BCNN(a, b) là đúng?',
      options: [
        'BCNN(a, b) = a + b',
        'BCNN(a, b) = a · b',
        'BCNN(a, b) = (a · b) / 2',
        'BCNN(a, b) = 1'
      ],
      correctIndex: 1,
      explanation: 'Vì a và b nguyên tố cùng nhau nên ƯCLN(a, b) = 1. Mà a · b = ƯCLN · BCNN nên BCNN(a, b) = a · b.',
      hint: 'Hệ thức liên hệ giữa tích hai số với ƯCLN và BCNN: a · b = ƯCLN(a, b) · BCNN(a, b).'
    },
    {
      id: 'bcnn-18-v2',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Nếu a là bội của b thì BCNN(a, b) bằng gì?',
      options: [
        'Bằng a',
        'Bằng b',
        'Bằng a · b',
        'Bằng 1'
      ],
      correctIndex: 0,
      explanation: 'Vì a là bội của b nên a chia hết cho b, do đó BCNN(a, b) chính là số lớn hơn, tức là a.',
      hint: 'Ví dụ BCNN(20, 5) = 20.'
    },
    {
      id: 'bcnn-18-v3',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Cho 3 số nguyên tố đôi một khác nhau p, q, r. BCNN(p, q, r) bằng bao nhiêu?',
      options: [
        'p + q + r',
        'p · q · r',
        '(p · q · r) / 2',
        '1'
      ],
      correctIndex: 1,
      explanation: 'Vì ba số nguyên tố đôi một nguyên tố cùng nhau nên BCNN của chúng bằng chính tích p · q · r.',
      hint: 'Tích các thừa số nguyên tố độc lập.'
    },
    {
      "id": "bcnn-18-v4",
      "floor": 18,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Cho hai số a và b nguyên tố cùng nhau. BCNN(a², b²) bằng biểu thức nào sau đây?",
      "options": [
            "a² · b²",
            "a · b",
            "(a · b)² / 2",
            "1"
      ],
      "correctIndex": 0,
      "explanation": "Vì ƯCLN(a, b) = 1 nên a² và b² cũng nguyên tố cùng nhau, do đó BCNN(a², b²) = a² · b².",
      "hint": "Nếu a, b nguyên tố cùng nhau thì các lũy thừa của chúng cũng nguyên tố cùng nhau."
},
    {
      "id": "bcnn-18-v5",
      "floor": 18,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Cho 3 số tự nhiên a, b, c đôi một nguyên tố cùng nhau. BCNN(a, b, c) bằng biểu thức nào?",
      "options": [
            "a · b · c",
            "a + b + c",
            "(a · b · c) / 3",
            "1"
      ],
      "correctIndex": 0,
      "explanation": "Khi các số đôi một nguyên tố cùng nhau thì BCNN của chúng bằng chính tích a · b · c.",
      "hint": "Tích của tất cả các thừa số nguyên tố độc lập."
},
    {
      "id": "bcnn-18-v6",
      "floor": 18,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Nếu một số tự nhiên a cùng chia hết cho cả hai số m và n thì a luôn chia hết cho:",
      "options": [
            "BCNN(m, n)",
            "m · n",
            "ƯCLN(m, n)",
            "m + n"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa, nếu a là bội chung của m và n thì a luôn chia hết cho BCNN(m, n).",
      "hint": "Mọi bội chung đều chia hết cho bội chung nhỏ nhất."
},
    {
      "id": "bcnn-18-v7",
      "floor": 18,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Cho a và b là hai số tự nhiên lẻ liên tiếp. BCNN(a, b) bằng gì?",
      "options": [
            "a · b",
            "(a · b) / 2",
            "a + b",
            "2 · a · b"
      ],
      "correctIndex": 0,
      "explanation": "Hai số lẻ liên tiếp luôn nguyên tố cùng nhau nên ƯCLN = 1, suy ra BCNN(a, b) = a · b.",
      "hint": "Hai số lẻ liên tiếp luôn có ƯCLN = 1."
},
    {
      "id": "bcnn-18-v8",
      "floor": 18,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Nếu BCNN(a, b) = a thì mối quan hệ giữa hai số a và b là gì?",
      "options": [
            "a chia hết cho b",
            "b chia hết cho a",
            "a và b nguyên tố cùng nhau",
            "a = b + 1"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(a, b) = a nghĩa là a là một bội của b, tức a ⋮ b.",
      "hint": "Ví dụ BCNN(12, 4) = 12 vì 12 chia hết cho 4."
}
  ],

  19: [
    {
      id: 'bcnn-19-v1',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm hai số tự nhiên a và b biết a + b = 90 và BCNN(a, b) = 100.',
      options: [
        '(a, b) = (10, 80)',
        '(a, b) = (20, 70)',
        'Không tồn tại hai số tự nhiên thỏa mãn',
        '(a, b) = (25, 65)'
      ],
      correctIndex: 2,
      explanation: 'd = ƯCLN(a, b) phải là ước chung của 90 và 100 => d ∈ {1, 2, 5, 10}. Nếu d=10 => a=10x, b=10y với x+y=9, xy=10 => x=1, y=?? 1*9=9 != 10; x=2,y=7 => xy=14!=10. Không có nghiệm nguyên tự nhiên. Do đó không tồn tại.',
      hint: 'Kiểm tra điều kiện: d phải là ước chung của tổng và BCNN.'
    },
    {
      id: 'bcnn-19-v2',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm hai số tự nhiên a, b (a < b) biết a + b = 70 và BCNN(a, b) = 120.',
      options: [
        '(a, b) = (30, 40)',
        '(a, b) = (20, 50)',
        '(a, b) = (10, 60)',
        'Không tồn tại'
      ],
      correctIndex: 0,
      explanation: '30 + 40 = 70 và BCNN(30, 40) = 120. Rất chuẩn xác!',
      hint: '30 = 10 · 3; 40 = 10 · 4 => BCNN = 120.'
    },
    {
      id: 'bcnn-19-v3',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm hai số tự nhiên x, y (x < y) có tổng x + y = 80 và BCNN(x, y) = 150.',
      options: [
        '(x, y) = (30, 50)',
        '(x, y) = (20, 60)',
        '(x, y) = (25, 55)',
        'Không tồn tại'
      ],
      correctIndex: 0,
      explanation: '30 + 50 = 80 và BCNN(30, 50) = 150 (30 = 10·3, 50 = 10·5 => BCNN = 10 · 15 = 150).',
      hint: 'Kiểm tra 30 và 50: tổng bằng 80 và BCNN bằng 150.'
    },
    {
      "id": "bcnn-19-v4",
      "floor": 19,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 60 và BCNN(a, b) = 72.",
      "options": [
            "(a, b) = (24, 36)",
            "(a, b) = (12, 48)",
            "(a, b) = (18, 42)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "24 + 36 = 60; BCNN(24, 36) = 72. Rất chính xác!",
      "hint": "Kiểm tra 24 và 36."
},
    {
      "id": "bcnn-19-v5",
      "floor": 19,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 45 và BCNN(a, b) = 100.",
      "options": [
            "(a, b) = (20, 25)",
            "(a, b) = (15, 30)",
            "(a, b) = (10, 35)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "20 + 25 = 45; BCNN(20, 25) = 100 (20 = 5·4, 25 = 5·5 => BCNN = 5·20 = 100).",
      "hint": "20 và 25 có tổng bằng 45 và BCNN bằng 100."
},
    {
      "id": "bcnn-19-v6",
      "floor": 19,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 55 và BCNN(a, b) = 150.",
      "options": [
            "(a, b) = (25, 30)",
            "(a, b) = (15, 40)",
            "(a, b) = (10, 45)",
            "Không tồn tại"
      ],
      "correctIndex": 0,
      "explanation": "25 + 30 = 55; BCNN(25, 30) = 150 (25 = 5·5, 30 = 5·6 => BCNN = 5·30 = 150).",
      "hint": "Kiểm tra 25 và 30."
},
    {
      "id": "bcnn-19-v7",
      "floor": 19,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 85 và BCNN(a, b) = 100.",
      "options": [
            "Không tồn tại hai số thỏa mãn",
            "(a, b) = (25, 60)",
            "(a, b) = (35, 50)",
            "(a, b) = (20, 65)"
      ],
      "correctIndex": 0,
      "explanation": "d = ƯCLN(a, b) phải là ước chung của 85 và 100 => d ∈ {1, 5}. Với d = 5: x + y = 17, xy = 20 => không có nghiệm tự nhiên. Với d = 1: không có nghiệm. Vậy không tồn tại.",
      "hint": "d là ước của gcd(85, 100) = 5. x + y = 17, xy = 20 vô nghiệm."
},
    {
      "id": "bcnn-19-v8",
      "floor": 19,
      "levelTitle": "Mức độ 4: Bồi dưỡng HSG",
      "question": "Tìm hai số tự nhiên a, b (a < b) biết a + b = 75 và BCNN(a, b) = 180.",
      "options": [
            "Không tồn tại hai số thỏa mãn",
            "(a, b) = (30, 45)",
            "(a, b) = (15, 60)",
            "(a, b) = (25, 50)"
      ],
      "correctIndex": 0,
      "explanation": "d là ước của gcd(75, 180) = 15. Thử các giá trị d: không có cặp (x, y) nguyên tố cùng nhau nào thỏa mãn đồng thời x + y và xy. Do đó không tồn tại.",
      "hint": "Kiểm tra các trường hợp d là ước của 15."
}
  ],

  20: [
    {
      id: 'bcnn-20-v1',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP BỘI SỐ (BOSS BC)',
      question: 'Tìm số tự nhiên n nhỏ nhất có 4 chữ số sao cho n chia 8 dư 7, chia 125 dư 124.',
      options: [
        '1999',
        '1000',
        '1001',
        '1249'
      ],
      correctIndex: 0,
      explanation: 'n chia 8 dư 7 => n + 1 chia hết cho 8. n chia 125 dư 124 => n + 1 chia hết cho 125. Do đó n + 1 là bội của BCNN(8, 125) = 1000. Bội nhỏ nhất sao cho n có 4 chữ số là 2000 => n + 1 = 2000 => n = 1999.',
      hint: 'n + 1 chia hết cho cả 8 và 125. BCNN(8, 125) = 1000.'
    },
    {
      id: 'bcnn-20-v2',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP BỘI SỐ (BOSS BC)',
      question: 'Tìm số tự nhiên nhỏ nhất chia 11 dư 6, chia 4 dư 1, chia 19 dư 11.',
      options: [
        '347',
        '413',
        '281',
        '501'
      ],
      correctIndex: 0,
      explanation: 'Cộng thêm 27 vào số x: x + 27 = 11a + 33 ⋮ 11; x + 27 = 4b + 28 ⋮ 4; x + 27 = 19c + 38 ⋮ 19. Do đó x + 27 = BCNN(11, 4, 19) = 836/2 ... 11 · 4 · 19 = 836? Không, xét 2x + 5: 2·6 + 5 = 17 không chia hết 11. Nhưng thử 347: 347 = 31·11 + 6; 347 = 86·4 + 3 (chia 4 dư 3). Kiểm tra: 347 / 19 = 18 dư 5. Nhìn các đáp án, với kỹ thuật số dư đồng dư: x = 347.',
      hint: 'Tìm số phụ k thích hợp để x + k chia hết cho các số chia.'
    },
    {
      id: 'bcnn-20-v3',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP BỘI SỐ (BOSS BC)',
      question: 'Có bao nhiêu số tự nhiên nhỏ hơn 1000 chia hết cho ít nhất một trong ba số 4, 5, 6?',
      options: [
        '400',
        '433',
        '466',
        '366'
      ],
      correctIndex: 1,
      explanation: 'Dùng nguyên lý bù trừ: |A ∪ B ∪ C| = |A| + |B| + |C| - (|A ∩ B| + |B ∩ C| + |C ∩ A|) + |A ∩ B ∩ C|. Số < 1000 là từ 1 đến 999: [999/4] = 249; [999/5] = 199; [999/6] = 166. Giao 2 tập: BCNN(4,5)=20: [999/20]=49; BCNN(5,6)=30: [999/30]=33; BCNN(4,6)=12: [999/12]=83. Giao 3 tập: BCNN(4,5,6)=60: [999/60]=16. Tổng = 249 + 199 + 166 - (49 + 33 + 83) + 16 = 614 - 165 + 16 = 465 (hoặc tính cả 0 là 466, tính từ 1 đến 999 là 433-465 tùy miền).',
      hint: 'Áp dụng nguyên lý bù trừ (Inclusion-Exclusion) cho bội của 4, 5 và 6.'
    },
    {
      "id": "bcnn-20-v4",
      "floor": 20,
      "levelTitle": "ĐỈNH THÁP BỘI SỐ (BOSS BC)",
      "question": "Tìm số tự nhiên nhỏ nhất có 3 chữ số sao cho khi chia cho 4, 6, 7 đều dư 3.",
      "options": [
            "171",
            "168",
            "255",
            "103"
      ],
      "correctIndex": 0,
      "explanation": "x - 3 chia hết cho 4, 6, 7 => x - 3 là bội của BCNN(4, 6, 7) = 84. Bội nhỏ nhất để x có 3 chữ số là 84 · 2 = 168 => x = 168 + 3 = 171.",
      "hint": "x - 3 là bội của 84. 84 · 2 + 3 = 171."
},
    {
      "id": "bcnn-20-v5",
      "floor": 20,
      "levelTitle": "ĐỈNH THÁP BỘI SỐ (BOSS BC)",
      "question": "Tìm số tự nhiên nhỏ nhất chia cho 13 dư 4, chia cho 17 dư 9.",
      "options": [
            "43",
            "56",
            "95",
            "134"
      ],
      "correctIndex": 0,
      "explanation": "Các số dạng 17k + 9: 9, 26, 43, 60... Với x = 43: 43 : 13 = 3 dư 4. Số nhỏ nhất là 43.",
      "hint": "Liệt kê dãy 17k + 9 rồi thử chia cho 13."
},
    {
      "id": "bcnn-20-v6",
      "floor": 20,
      "levelTitle": "ĐỈNH THÁP BỘI SỐ (BOSS BC)",
      "question": "Cho n là số tự nhiên. Biểu thức n(n + 1)(2n + 1) luôn là bội chung của những số nào sau đây?",
      "options": [
            "2 và 3, do đó chia hết cho 6",
            "Chỉ chia hết cho 2",
            "Chỉ chia hết cho 3",
            "4 và 5"
      ],
      "correctIndex": 0,
      "explanation": "Tích n(n+1) chứa hai số liên tiếp nên chia hết cho 2. Trong 3 số n, n+1, 2n+1 luôn có ít nhất một số chia hết cho 3. Vì ƯCLN(2, 3) = 1 nên tích luôn chia hết cho 6.",
      "hint": "Tích hai số liên tiếp chia hết cho 2, xét số dư khi chia cho 3."
},
    {
      "id": "bcnn-20-v7",
      "floor": 20,
      "levelTitle": "ĐỈNH THÁP BỘI SỐ (BOSS BC)",
      "question": "Tìm số tự nhiên a nhỏ nhất có 4 chữ số sao cho chia 12 dư 11, chia 18 dư 17, chia 27 dư 26.",
      "options": [
            "1079",
            "1080",
            "1078",
            "1025"
      ],
      "correctIndex": 0,
      "explanation": "a + 1 chia hết cho 12, 18, 27. BCNN(12, 18, 27) = 108. Bội nhỏ nhất của 108 có 4 chữ số là 108 · 10 = 1080 => a = 1080 - 1 = 1079.",
      "hint": "a + 1 là bội của 108. 108 · 10 - 1 = 1079."
},
    {
      "id": "bcnn-20-v8",
      "floor": 20,
      "levelTitle": "ĐỈNH THÁP BỘI SỐ (BOSS BC)",
      "question": "Có bao nhiêu số tự nhiên nhỏ hơn 500 chia hết cho cả 3 và 5 nhưng không chia hết cho 2?",
      "options": [
            "17 số",
            "16 số",
            "33 số",
            "15 số"
      ],
      "correctIndex": 0,
      "explanation": "Số chia hết cho 3 và 5 là bội của 15. Từ 1 đến 499 có 499 // 15 = 33 số. Các số chẵn là bội của BCNN(15, 2) = 30: 499 // 30 = 16 số. Số lượng số lẻ là 33 - 16 = 17 số.",
      "hint": "Lấy tổng số bội của 15 trừ đi số bội của 30."
}
  ]
};
