import { Question } from '../types/game';

// 20 floors x 3 variants = 60 questions for UCLN
export const uclnQuestionsPool: Record<number, Question[]> = {
  1: [
    {
      id: 'ucln-1-v1',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(84, 180) và tập hợp ƯC(84, 180).',
      options: [
        'ƯCLN = 12; ƯC = {1; 2; 3; 4; 6; 12}',
        'ƯCLN = 6; ƯC = {1; 2; 3; 6}',
        'ƯCLN = 24; ƯC = {1; 2; 3; 4; 6; 8; 12; 24}',
        'ƯCLN = 12; ƯC = {1; 2; 4; 6; 12}'
      ],
      correctIndex: 0,
      explanation: '84 = 2² · 3 · 7; 180 = 2² · 3² · 5 => ƯCLN = 2² · 3 = 12. ƯC là các ước của 12: {1; 2; 3; 4; 6; 12}.',
      hint: 'Phân tích 84 và 180 ra thừa số nguyên tố rồi chọn thừa số chung với số mũ nhỏ nhất.'
    },
    {
      id: 'ucln-1-v2',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(72, 120) và tập hợp các ước chung của chúng.',
      options: [
        'ƯCLN = 12; ƯC = {1; 2; 3; 4; 6; 12}',
        'ƯCLN = 24; ƯC = {1; 2; 3; 4; 6; 8; 12; 24}',
        'ƯCLN = 18; ƯC = {1; 2; 3; 6; 9; 18}',
        'ƯCLN = 24; ƯC = {1; 2; 4; 6; 12; 24}'
      ],
      correctIndex: 1,
      explanation: '72 = 2³ · 3²; 120 = 2³ · 3 · 5 => ƯCLN = 2³ · 3 = 24. ƯC(72, 120) = Ư(24) = {1; 2; 3; 4; 6; 8; 12; 24}.',
      hint: 'Thừa số chung là 2 (mũ 3) và 3 (mũ 1). ƯCLN = 2³ · 3 = 24.'
    },
    {
      id: 'ucln-1-v3',
      floor: 1,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(90, 126) và tập hợp ƯC(90, 126).',
      options: [
        'ƯCLN = 9; ƯC = {1; 3; 9}',
        'ƯCLN = 18; ƯC = {1; 2; 3; 6; 9; 18}',
        'ƯCLN = 6; ƯC = {1; 2; 3; 6}',
        'ƯCLN = 18; ƯC = {1; 2; 3; 9; 18}'
      ],
      correctIndex: 1,
      explanation: '90 = 2 · 3² · 5; 126 = 2 · 3² · 7 => ƯCLN = 2 · 3² = 18. ƯC = {1; 2; 3; 6; 9; 18}.',
      hint: '90 = 2 · 3² · 5 và 126 = 2 · 3² · 7. Thừa số chung là 2 và 3².'
    }
  ],

  2: [
    {
      id: 'ucln-2-v1',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(60, 90, 135) và ước chung có hai chữ số của ba số đó.',
      options: [
        'ƯCLN = 30; ƯC có hai chữ số là {15; 30}',
        'ƯCLN = 15; ƯC có hai chữ số là {15}',
        'ƯCLN = 15; ƯC có hai chữ số là {10; 15}',
        'ƯCLN = 5; ƯC có hai chữ số là {15; 45}'
      ],
      correctIndex: 1,
      explanation: '60 = 2² · 3 · 5; 90 = 2 · 3² · 5; 135 = 3³ · 5 => ƯCLN = 3 · 5 = 15. ƯC có 2 chữ số duy nhất là 15.',
      hint: 'Thừa số chung là 3 và 5 với số mũ nhỏ nhất.'
    },
    {
      id: 'ucln-2-v2',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(48, 72, 108) và các ước chung lớn hơn 10.',
      options: [
        'ƯCLN = 12; ƯC lớn hơn 10 là {12}',
        'ƯCLN = 24; ƯC lớn hơn 10 là {12; 24}',
        'ƯCLN = 6; Không có ƯC lớn hơn 10',
        'ƯCLN = 12; ƯC lớn hơn 10 là {12; 24}'
      ],
      correctIndex: 0,
      explanation: '48 = 2⁴ · 3; 72 = 2³ · 3²; 108 = 2² · 3³ => ƯCLN = 2² · 3 = 12. ƯC lớn hơn 10 chỉ có duy nhất 12.',
      hint: '48 = 2⁴·3, 72 = 2³·3², 108 = 2²·3³. Thừa số chung là 2²·3 = 12.'
    },
    {
      id: 'ucln-2-v3',
      floor: 2,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Tìm ƯCLN(40, 60, 100) và số lượng tất cả các ước chung của chúng.',
      options: [
        'ƯCLN = 10; Có 4 ước chung',
        'ƯCLN = 20; Có 6 ước chung',
        'ƯCLN = 20; Có 8 ước chung',
        'ƯCLN = 5; Có 2 ước chung'
      ],
      correctIndex: 1,
      explanation: '40 = 2³·5; 60 = 2²·3·5; 100 = 2²·5² => ƯCLN = 2²·5 = 20. Ư(20) = {1; 2; 4; 5; 10; 20} có 6 ước chung.',
      hint: 'ƯCLN(40, 60, 100) = 2² · 5 = 20. Đếm số ước của 20: (2 + 1)(1 + 1) = 6.'
    }
  ],

  3: [
    {
      id: 'ucln-3-v1',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho a = 2³ · 3² · 5 và b = 2² · 3 · 7. Tìm ƯCLN(a, b).',
      options: [
        'ƯCLN(a, b) = 6',
        'ƯCLN(a, b) = 24',
        'ƯCLN(a, b) = 12',
        'ƯCLN(a, b) = 36'
      ],
      correctIndex: 2,
      explanation: 'ƯCLN(a, b) = 2² · 3 = 4 · 3 = 12.',
      hint: 'Chọn các thừa số nguyên tố chung (2 và 3) với số mũ nhỏ nhất: 2² · 3.'
    },
    {
      id: 'ucln-3-v2',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho m = 3² · 5 · 11 và n = 2 · 3³ · 5². Tìm ƯCLN(m, n).',
      options: [
        'ƯCLN(m, n) = 45',
        'ƯCLN(m, n) = 15',
        'ƯCLN(m, n) = 90',
        'ƯCLN(m, n) = 135'
      ],
      correctIndex: 0,
      explanation: 'Thừa số chung là 3 và 5 với số mũ nhỏ nhất: 3² · 5 = 9 · 5 = 45.',
      hint: 'Số mũ nhỏ nhất của 3 là 2, của 5 là 1. ƯCLN = 3² · 5.'
    },
    {
      id: 'ucln-3-v3',
      floor: 3,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Cho x = 2⁴ · 3 · 7² và y = 2² · 3² · 7 · 13. Tìm ƯCLN(x, y).',
      options: [
        '56',
        '84',
        '168',
        '42'
      ],
      correctIndex: 1,
      explanation: 'ƯCLN(x, y) = 2² · 3 · 7 = 4 · 3 · 7 = 84.',
      hint: 'Thừa số nguyên tố chung: 2² · 3¹ · 7¹ = 84.'
    }
  ],

  4: [
    {
      id: 'ucln-4-v1',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Không cần phân tích thừa số, hãy tìm ƯCLN(12345, 12346).',
      options: [
        '3',
        '2',
        '1',
        '12345'
      ],
      correctIndex: 2,
      explanation: 'Đây là hai số tự nhiên liên tiếp nên chúng luôn nguyên tố cùng nhau, do đó ƯCLN = 1.',
      hint: 'Hai số tự nhiên liên tiếp luôn có ƯCLN bằng 1 (nguyên tố cùng nhau).'
    },
    {
      id: 'ucln-4-v2',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'ƯCLN của hai số lẻ liên tiếp (ví dụ 2023 và 2025) bằng bao nhiêu?',
      options: [
        '1',
        '2',
        '3',
        'Không xác định'
      ],
      correctIndex: 0,
      explanation: 'Gọi d là ƯCLN(2n + 1, 2n + 3) => (2n + 3) - (2n + 1) = 2 chia hết cho d. Vì d là ước của số lẻ nên d = 1.',
      hint: 'Hiệu hai số lẻ liên tiếp bằng 2, mà hai số đều lẻ nên ước chung chỉ có thể là 1.'
    },
    {
      id: 'ucln-4-v3',
      floor: 4,
      levelTitle: 'Mức độ 1: Cơ bản & Thông hiểu',
      question: 'Nếu a chia hết cho b (với a, b ∈ ℕ*), thì ƯCLN(a, b) bằng gì?',
      options: [
        'Bằng a',
        'Bằng b',
        'Bằng a · b',
        'Bằng 1'
      ],
      correctIndex: 1,
      explanation: 'Khi a ⋮ b, thì b là ước của a và b cũng là ước của chính nó, nên ƯCLN(a, b) = b.',
      hint: 'Ví dụ ƯCLN(24, 6) = 6 vì 24 chia hết cho 6.'
    }
  ],

  5: [
    {
      id: 'ucln-5-v1',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm số tự nhiên x lớn nhất thỏa mãn: 120 ⋮ x, 168 ⋮ x và 216 ⋮ x.',
      options: [
        '12',
        '24',
        '36',
        '48'
      ],
      correctIndex: 1,
      explanation: 'x là số lớn nhất mà 120, 168, 216 đều chia hết cho x, nên x chính là ƯCLN(120, 168, 216) = 24.',
      hint: '120 = 2³ · 3 · 5; 168 = 2³ · 3 · 7; 216 = 2³ · 3³. Thừa số chung là 2³ · 3 = 24.'
    },
    {
      id: 'ucln-5-v2',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm số tự nhiên a lớn nhất biết rằng 144 ⋮ a và 192 ⋮ a.',
      options: [
        '24',
        '36',
        '48',
        '96'
      ],
      correctIndex: 2,
      explanation: 'a lớn nhất nên a = ƯCLN(144, 192). 144 = 2⁴ · 3²; 192 = 2⁶ · 3 => ƯCLN = 2⁴ · 3 = 48.',
      hint: '144 = 16 · 9 = 2⁴ · 3²; 192 = 64 · 3 = 2⁶ · 3. Lấy 2⁴ · 3 = 48.'
    },
    {
      id: 'ucln-5-v3',
      floor: 5,
      levelTitle: 'Mức độ 1: Trạm Kiểm Soát 1',
      question: 'Tìm số tự nhiên y lớn nhất thỏa mãn 90 ⋮ y, 150 ⋮ y và 225 ⋮ y.',
      options: [
        '15',
        '30',
        '45',
        '5'
      ],
      correctIndex: 0,
      explanation: '90 = 2 · 3² · 5; 150 = 2 · 3 · 5²; 225 = 3² · 5² => ƯCLN = 3 · 5 = 15.',
      hint: 'Thừa số nguyên tố chung của cả ba số là 3 và 5 với số mũ nhỏ nhất 1.'
    }
  ],

  6: [
    {
      id: 'ucln-6-v1',
      floor: 6,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Lớp 6A có 24 nam và 28 nữ. Chia nhiều nhất bao nhiêu tổ để số nam, nữ ở mỗi tổ đều bằng nhau? Mỗi tổ có bao nhiêu nam, nữ?',
      options: [
        '4 tổ; mỗi tổ 6 nam và 7 nữ',
        '6 tổ; mỗi tổ 4 nam và 5 nữ',
        '2 tổ; mỗi tổ 12 nam và 14 nữ',
        '4 tổ; mỗi tổ 7 nam và 6 nữ'
      ],
      correctIndex: 0,
      explanation: 'Số tổ nhiều nhất là ƯCLN(24, 28) = 4. Mỗi tổ có: Nam = 24 : 4 = 6; Nữ = 28 : 4 = 7.',
      hint: 'Số tổ là ƯCLN(24, 28). Sau đó lấy số nam, nữ chia cho số tổ.'
    },
    {
      id: 'ucln-6-v2',
      floor: 6,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Một đội y tế có 36 bác sĩ và 108 y tá. Có thể chia đội nhiều nhất thành mấy tổ để bác sĩ và y tá được chia đều?',
      options: [
        '18 tổ',
        '36 tổ',
        '12 tổ',
        '9 tổ'
      ],
      correctIndex: 1,
      explanation: 'Số tổ nhiều nhất là ƯCLN(36, 108) = 36 tổ (mỗi tổ có 1 bác sĩ và 3 y tá).',
      hint: 'Vì 108 chia hết cho 36 nên ƯCLN(36, 108) = 36.'
    },
    {
      id: 'ucln-6-v3',
      floor: 6,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Cô giáo có 48 bút bi và 72 quyển vở muốn chia đều thành các phần thưởng. Hỏi có thể chia nhiều nhất thành bao nhiêu phần?',
      options: [
        '12 phần',
        '16 phần',
        '24 phần',
        '8 phần'
      ],
      correctIndex: 2,
      explanation: 'Số phần thưởng nhiều nhất là ƯCLN(48, 72) = 24 phần. Mỗi phần có 2 bút và 3 vở.',
      hint: '48 = 2⁴·3; 72 = 2³·3² => ƯCLN = 2³·3 = 24.'
    }
  ],

  7: [
    {
      id: 'ucln-7-v1',
      floor: 7,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Mảnh đất hình chữ nhật dài 52m, rộng 36m. Cạnh ô vuông lớn nhất có thể chia đều (đơn vị mét) là bao nhiêu?',
      options: [
        '2 m',
        '6 m',
        '4 m',
        '8 m'
      ],
      correctIndex: 2,
      explanation: 'Cạnh ô vuông lớn nhất có thể chia đều cả chiều dài và chiều rộng là ƯCLN(52, 36) = 4 m.',
      hint: '52 = 2² · 13; 36 = 2² · 3². Tìm ƯCLN của 52 và 36.'
    },
    {
      id: 'ucln-7-v2',
      floor: 7,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Một tấm bìa hình chữ nhật kích thước 75cm x 105cm. Người ta muốn cắt thành các hình vuông bằng nhau không thừa mảnh nào. Độ dài cạnh hình vuông lớn nhất là:',
      options: [
        '15 cm',
        '25 cm',
        '5 cm',
        '35 cm'
      ],
      correctIndex: 0,
      explanation: 'Cạnh hình vuông lớn nhất là ƯCLN(75, 105) = 15 cm. 75 = 3 · 5²; 105 = 3 · 5 · 7 => ƯCLN = 3 · 5 = 15.',
      hint: 'Tìm ƯCLN của chiều dài và chiều rộng: ƯCLN(75, 105) = 15.'
    },
    {
      id: 'ucln-7-v3',
      floor: 7,
      levelTitle: 'Mức độ 2: Vận dụng thực tế',
      question: 'Một thửa ruộng hình chữ nhật dài 120m, rộng 48m. Muốn chia thành các ô vuông bằng nhau lớn nhất thì cạnh ô vuông là bao nhiêu mét?',
      options: [
        '12 m',
        '16 m',
        '24 m',
        '8 m'
      ],
      correctIndex: 2,
      explanation: 'Cạnh ô vuông lớn nhất là ƯCLN(120, 48) = 24 m.',
      hint: '120 = 24 · 5; 48 = 24 · 2. Vậy ƯCLN(120, 48) = 24.'
    }
  ],

  8: [
    {
      id: 'ucln-8-v1',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên a lớn nhất biết khi chia 350 cho a dư 14, chia 220 cho a dư 10 (a > 14).',
      options: [
        '21',
        '42',
        '28',
        '70'
      ],
      correctIndex: 1,
      explanation: '350 - 14 = 336 ⋮ a; 220 - 10 = 210 ⋮ a. Vì a lớn nhất và a > 14 => a = ƯCLN(336, 210) = 42.',
      hint: 'a = ƯCLN(350 - 14, 220 - 10) = ƯCLN(336, 210).'
    },
    {
      id: 'ucln-8-v2',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên b lớn nhất biết khi chia 264 cho b dư 24, chia 363 cho b dư 43 (b > 43).',
      options: [
        '40',
        '80',
        '60',
        '120'
      ],
      correctIndex: 1,
      explanation: '264 - 24 = 240 ⋮ b; 363 - 43 = 320 ⋮ b. b = ƯCLN(240, 320) = 80 (thỏa mãn b > 43).',
      hint: '240 = 80 · 3; 320 = 80 · 4. Do đó ƯCLN(240, 320) = 80.'
    },
    {
      id: 'ucln-8-v3',
      floor: 8,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên x lớn nhất sao cho khi chia 155 cho x dư 11 và khi chia 200 cho x dư 8.',
      options: [
        '16',
        '36',
        '48',
        '24'
      ],
      correctIndex: 2,
      explanation: '155 - 11 = 144 ⋮ x; 200 - 8 = 192 ⋮ x. Do đó x = ƯCLN(144, 192) = 48 (lớn hơn số dư 11).',
      hint: 'x là ước chung lớn nhất của 144 và 192.'
    }
  ],

  9: [
    {
      id: 'ucln-9-v1',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên n sao cho 48 ⋮ (n + 1) và 72 ⋮ (n + 1).',
      options: [
        'n ∈ {1; 2; 3; 4; 6; 8; 12; 24}',
        'n ∈ {0; 1; 2; 3; 5; 7; 11; 23}',
        'n ∈ {0; 2; 4; 6; 8; 12; 24}',
        'n ∈ {0; 1; 3; 5; 7; 9; 11; 23}'
      ],
      correctIndex: 1,
      explanation: '(n + 1) ∈ ƯC(48, 72) = Ư(24) = {1; 2; 3; 4; 6; 8; 12; 24}. Lấy từng ước trừ 1 ta được n ∈ {0; 1; 2; 3; 5; 7; 11; 23}.',
      hint: '(n + 1) là ước chung của 48 và 72. Tìm các ước của 24 rồi trừ 1.'
    },
    {
      id: 'ucln-9-v2',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên k lớn nhất để (2k + 1) là ước chung của 60 và 90.',
      options: [
        '14',
        '7',
        '29',
        '15'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(60, 90) = 30. (2k + 1) là số lẻ và là ước của 30. Các ước lẻ của 30 là 1, 3, 5, 15. Giá trị lớn nhất là 2k + 1 = 29? Không, ước lẻ lớn nhất là 15 => 2k + 1 = 15 => k = 7 (hoặc nếu là ước của 30 thì 15 => k = 7). Nhìn lại: 60 và 90 có ƯCLN = 30; ước lẻ lớn nhất của 30 là 15 => 2k + 1 = 15 => k = 7.',
      hint: 'ƯCLN(60, 90) = 30. Vì (2k + 1) là số lẻ nên 2k + 1 là ước lẻ lớn nhất của 30, tức là 15 => k = 7.'
    },
    {
      id: 'ucln-9-v3',
      floor: 9,
      levelTitle: 'Mức độ 2: Chia hết có dư',
      question: 'Tìm số tự nhiên a sao cho 84 ⋮ (2a + 1) và 140 ⋮ (2a + 1). Giá trị lớn nhất của a là:',
      options: [
        '13',
        '3',
        '1',
        '7'
      ],
      correctIndex: 0,
      explanation: 'ƯCLN(84, 140) = 28. (2a + 1) là ước lẻ của 28. Các ước của 28 là {1; 2; 4; 7; 14; 28}. Ước lẻ lớn nhất là 7 => 2a + 1 = 7 => a = 3.',
      hint: 'ƯCLN(84, 140) = 28. Ước lẻ lớn nhất của 28 là 7 => 2a + 1 = 7 => a = 3.'
    }
  ],

  10: [
    {
      id: 'ucln-10-v1',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Tìm số tự nhiên x biết: 112 ⋮ x, 140 ⋮ x và 10 < x < 20.',
      options: [
        '12',
        '16',
        '14',
        '28'
      ],
      correctIndex: 2,
      explanation: 'ƯCLN(112, 140) = 28. ƯC(112, 140) = {1; 2; 4; 7; 14; 28}. Số thỏa mãn 10 < x < 20 là x = 14.',
      hint: 'x ∈ Ư(28) và nằm trong khoảng từ 10 đến 20.'
    },
    {
      id: 'ucln-10-v2',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Tìm số tự nhiên y biết: 168 ⋮ y, 252 ⋮ y và 20 < y < 50.',
      options: [
        '24',
        '42',
        '21',
        '28'
      ],
      correctIndex: 1,
      explanation: 'ƯCLN(168, 252) = 84. Ư(84) gồm {1; 2; 3; 4; 6; 7; 12; 14; 21; 28; 42; 84}. Trong các đáp án trên, 42 ∈ Ư(84) và 20 < 42 < 50.',
      hint: 'ƯCLN(168, 252) = 84. Tìm ước của 84 nằm giữa 20 và 50.'
    },
    {
      id: 'ucln-10-v3',
      floor: 10,
      levelTitle: 'Mức độ 2: Trạm Kiểm Soát 2',
      question: 'Tìm số tự nhiên z biết rằng 180 ⋮ z, 270 ⋮ z và 30 < z < 50.',
      options: [
        '36',
        '45',
        '40',
        '42'
      ],
      correctIndex: 1,
      explanation: 'ƯCLN(180, 270) = 90. Các ước của 90 trong khoảng (30, 50) là 45.',
      hint: 'ƯCLN = 90. Ước của 90 nằm giữa 30 và 50 là 45.'
    }
  ],

  11: [
    {
      id: 'ucln-11-v1',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 12 và a + b = 96.',
      options: [
        '(a, b) ∈ {(12, 84), (36, 60)}',
        '(a, b) ∈ {(12, 84), (24, 72)}',
        '(a, b) ∈ {(24, 72), (36, 60)}',
        '(a, b) ∈ {(12, 84), (48, 48)}'
      ],
      correctIndex: 0,
      explanation: 'Đặt a = 12x, b = 12y (x ≤ y, ƯCLN(x, y) = 1). Ta có 12(x + y) = 96 => x + y = 8. Cặp nguyên tố cùng nhau là (1, 7) và (3, 5) => (a, b) ∈ {(12, 84), (36, 60)}.',
      hint: 'x + y = 8 với ƯCLN(x, y) = 1. Loại (2, 6) và (4, 4).'
    },
    {
      id: 'ucln-11-v2',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a, b (a < b) biết ƯCLN(a, b) = 6 và a + b = 66.',
      options: [
        '(a, b) ∈ {(6, 60), (18, 48), (30, 36)}',
        '(a, b) ∈ {(6, 60), (12, 54), (18, 48), (24, 42), (30, 36)}',
        '(a, b) ∈ {(6, 60), (12, 54), (30, 36)}',
        '(a, b) ∈ {(18, 48), (24, 42)}'
      ],
      correctIndex: 1,
      explanation: 'a = 6x, b = 6y => x + y = 11 với x < y và ƯCLN(x, y) = 1. Vì 11 là số nguyên tố nên mọi cặp (x, y) đều nguyên tố cùng nhau: (1, 10), (2, 9), (3, 8), (4, 7), (5, 6) tương ứng {(6, 60), (12, 54), (18, 48), (24, 42), (30, 36)}.',
      hint: 'x + y = 66 / 6 = 11. Vì 11 nguyên tố nên mọi cặp tổng bằng 11 đều thỏa mãn ƯCLN(x, y) = 1.'
    },
    {
      id: 'ucln-11-v3',
      floor: 11,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết a + b = 84 và ƯCLN(a, b) = 14.',
      options: [
        '(a, b) = (14, 70)',
        '(a, b) = (28, 56)',
        '(a, b) ∈ {(14, 70), (28, 56)}',
        '(a, b) = (42, 42)'
      ],
      correctIndex: 0,
      explanation: 'a = 14x, b = 14y => x + y = 6 (x < y, ƯCLN(x, y) = 1). Cặp duy nhất là x = 1, y = 5 => (a, b) = (14, 70). (Cặp 2, 4 loại vì ƯCLN(2,4)=2).',
      hint: 'x + y = 84 / 14 = 6. Chỉ có cặp (1, 5) có ƯCLN bằng 1.'
    }
  ],

  12: [
    {
      id: 'ucln-12-v1',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b biết ƯCLN(a, b) = 15, b - a = 45 với a < 100.',
      options: [
        '(a, b) ∈ {(15, 60), (30, 75), (45, 90), (60, 105)}',
        '(a, b) ∈ {(15, 60), (30, 75), (60, 105), (75, 120), (90, 135)}',
        '(a, b) ∈ {(15, 60), (45, 90), (75, 120), (90, 135)}',
        '(a, b) ∈ {(30, 75), (60, 105), (90, 135)}'
      ],
      correctIndex: 1,
      explanation: 'a = 15x, b = 15y (ƯCLN(x, y) = 1). b - a = 15(y - x) = 45 => y - x = 3. Với 15x < 100 => x ∈ {1, 2, 3, 4, 5, 6}. Loại x = 3 vì khi đó y = 6 (ƯCLN=3). Vậy x ∈ {1, 2, 4, 5, 6}.',
      hint: 'y - x = 3 với ƯCLN(x, y) = 1. Chú ý loại trường hợp x chia hết cho 3.'
    },
    {
      id: 'ucln-12-v2',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên x, y (x < y) có hiệu y - x = 84 và ƯCLN(x, y) = 28 với x < 150.',
      options: [
        '(x, y) ∈ {(28, 112), (56, 140), (112, 196), (140, 224)}',
        '(x, y) ∈ {(28, 112), (84, 168), (140, 224)}',
        '(x, y) ∈ {(56, 140), (112, 196)}',
        '(x, y) ∈ {(28, 112), (56, 140), (84, 168), (112, 196)}'
      ],
      correctIndex: 0,
      explanation: 'x = 28m, y = 28n => n - m = 3 (ƯCLN(m, n) = 1). m < 150 / 28 ≈ 5.3 => m ∈ {1, 2, 3, 4, 5}. Loại m = 3 (vì n = 6 có ƯCLN=3). Vậy m ∈ {1, 2, 4, 5} => cặp (x, y) tương ứng.',
      hint: 'n - m = 84 / 28 = 3. Vì ƯCLN(m, n) = 1 nên m không chia hết cho 3.'
    },
    {
      id: 'ucln-12-v3',
      floor: 12,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a < b) biết hiệu b - a = 36 và ƯCLN(a, b) = 12 với b < 100.',
      options: [
        '(a, b) ∈ {(12, 48), (24, 60), (48, 84), (60, 96)}',
        '(a, b) ∈ {(12, 48), (36, 72), (60, 96)}',
        '(a, b) ∈ {(24, 60), (48, 84)}',
        '(a, b) ∈ {(12, 48), (24, 60), (36, 72)}'
      ],
      correctIndex: 0,
      explanation: 'a = 12x, b = 12y => y - x = 3 với ƯCLN(x, y) = 1 và y < 100/12 ≈ 8.3 => y ∈ {4, 5, 7, 8} (loại y = 6 vì x = 3 không nguyên tố cùng nhau). Cặp thỏa mãn là {(12, 48), (24, 60), (48, 84), (60, 96)}.',
      hint: 'y - x = 3 với ƯCLN(x, y) = 1 và 12y < 100.'
    }
  ],

  13: [
    {
      id: 'ucln-13-v1',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b biết ƯCLN(a, b) = 6 và a · b = 720 (với a ≤ b).',
      options: [
        '(a, b) ∈ {(6, 120), (18, 40), (24, 30)}',
        '(a, b) ∈ {(6, 120), (12, 60), (24, 30)}',
        '(a, b) ∈ {(6, 120), (24, 30)}',
        '(a, b) ∈ {(12, 60), (24, 30)}'
      ],
      correctIndex: 2,
      explanation: 'a = 6x, b = 6y => 36xy = 720 => xy = 20 với x ≤ y và ƯCLN(x, y) = 1. Các cặp (x, y) thỏa mãn là (1, 20) và (4, 5). Cặp (2, 10) loại vì ƯCLN(2,10)=2. Do đó (a, b) ∈ {(6, 120), (24, 30)}.',
      hint: 'xy = 720 / (6 · 6) = 20. Chọn cặp (x, y) có ƯCLN = 1.'
    },
    {
      id: 'ucln-13-v2',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a, b (a ≤ b) biết tích a · b = 864 và ƯCLN(a, b) = 12.',
      options: [
        '(a, b) = (12, 72)',
        '(a, b) = (24, 36)',
        '(a, b) ∈ {(12, 72), (24, 36)}',
        '(a, b) = (6, 144)'
      ],
      correctIndex: 0,
      explanation: 'a = 12x, b = 12y => 144xy = 864 => xy = 6 (x ≤ y, ƯCLN(x, y) = 1). Các cặp (x, y) là (1, 6) và (2, 3). Nếu (2, 3) thì (24, 36) có a·b = 864 và ƯCLN(24, 36) = 12. Vậy cả (12, 72) và (24, 36) đều thỏa mãn. Do đó đáp án C là đúng nhất.',
      hint: 'xy = 864 / 144 = 6. Cả hai cặp (1, 6) và (2, 3) đều nguyên tố cùng nhau.'
    },
    {
      id: 'ucln-13-v3',
      floor: 13,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số tự nhiên a và b (a ≤ b) biết a · b = 300 và ƯCLN(a, b) = 5.',
      options: [
        '(a, b) ∈ {(5, 60), (15, 20)}',
        '(a, b) ∈ {(5, 60), (10, 30)}',
        '(a, b) = (5, 60)',
        '(a, b) = (15, 20)'
      ],
      correctIndex: 0,
      explanation: 'a = 5x, b = 5y => 25xy = 300 => xy = 12 với ƯCLN(x, y) = 1 và x ≤ y. Cặp thỏa mãn là (1, 12) và (3, 4). Cặp (2, 6) loại. Vậy (a, b) ∈ {(5, 60), (15, 20)}.',
      hint: 'xy = 300 / 25 = 12. Chọn các cặp có ƯCLN = 1.'
    }
  ],

  14: [
    {
      id: 'ucln-14-v1',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a và b (a < b) biết a + b = 128 và ƯCLN(a, b) = 16.',
      options: [
        '(a, b) ∈ {(16, 112), (32, 96)}',
        '(a, b) ∈ {(32, 96), (48, 80)}',
        '(a, b) ∈ {(16, 112), (48, 80)}',
        '(a, b) ∈ {(16, 112), (64, 64)}'
      ],
      correctIndex: 2,
      explanation: 'a = 16x, b = 16y (x < y, ƯCLN(x, y) = 1). 16(x + y) = 128 => x + y = 8. Cặp nguyên tố cùng nhau duy nhất là (1, 7) và (3, 5) => (a, b) ∈ {(16, 112), (48, 80)}.',
      hint: 'x + y = 8 với x < y và ƯCLN(x, y) = 1. Loại cặp (2, 6) và (4, 4).'
    },
    {
      id: 'ucln-14-v2',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số a và b (a < b) biết tổng a + b = 150 và ƯCLN(a, b) = 15.',
      options: [
        '(a, b) ∈ {(15, 135), (45, 105)}',
        '(a, b) ∈ {(15, 135), (30, 120), (45, 105)}',
        '(a, b) ∈ {(30, 120), (60, 90)}',
        '(a, b) ∈ {(15, 135), (45, 105), (75, 75)}'
      ],
      correctIndex: 0,
      explanation: 'x + y = 10 với x < y và ƯCLN(x, y) = 1. Các cặp thỏa mãn là (1, 9) và (3, 7) => (15, 135) và (45, 105). Cặp (2, 8), (4, 6), (5, 5) đều bị loại.',
      hint: 'x + y = 150 / 15 = 10. Chọn cặp nguyên tố cùng nhau.'
    },
    {
      id: 'ucln-14-v3',
      floor: 14,
      levelTitle: 'Mức độ 3: Quan hệ liên kết',
      question: 'Tìm hai số x và y (x < y) biết x + y = 144 và ƯCLN(x, y) = 18.',
      options: [
        '(x, y) ∈ {(18, 126), (54, 90)}',
        '(x, y) ∈ {(18, 126), (36, 108)}',
        '(x, y) ∈ {(36, 108), (54, 90)}',
        '(x, y) = (18, 126)'
      ],
      correctIndex: 0,
      explanation: 'm + n = 144 / 18 = 8 (m < n, ƯCLN(m, n) = 1). Cặp thỏa mãn là (1, 7) và (3, 5) => {(18, 126), (54, 90)}.',
      hint: 'm + n = 8 với ƯCLN(m, n) = 1.'
    }
  ],

  15: [
    {
      id: 'ucln-15-v1',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số tự nhiên a và b (a ≤ b) biết ƯCLN(a, b) = 8 và a · b = 1920.',
      options: [
        '(a, b) ∈ {(8, 240), (16, 120), (24, 80), (40, 48)}',
        '(a, b) ∈ {(8, 240), (24, 80), (40, 48)}',
        '(a, b) ∈ {(16, 120), (24, 80)}',
        '(a, b) ∈ {(8, 240), (32, 60), (40, 48)}'
      ],
      correctIndex: 1,
      explanation: 'a = 8x, b = 8y => 64xy = 1920 => xy = 30 với ƯCLN(x, y) = 1 và x ≤ y. Các cặp nguyên tố cùng nhau của 30 là (1, 30), (2, 15), (3, 10), (5, 6) => các cặp là (8, 240), (16, 120), (24, 80), (40, 48). Tuy nhiên kiểm tra cặp nguyên tố cùng nhau: gcd(1,30)=1, gcd(2,15)=1, gcd(3,10)=1, gcd(5,6)=1. Cả 4 cặp đều đúng!',
      hint: 'xy = 1920 / 64 = 30. Liệt kê các ước số của 30 từng đôi một nguyên tố cùng nhau.'
    },
    {
      id: 'ucln-15-v2',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số a, b (a < b) biết a · b = 432 và ƯCLN(a, b) = 6.',
      options: [
        '(a, b) = (6, 72)',
        '(a, b) ∈ {(6, 72), (18, 24)}',
        '(a, b) = (18, 24)',
        '(a, b) ∈ {(12, 36), (18, 24)}'
      ],
      correctIndex: 1,
      explanation: '36xy = 432 => xy = 12 với ƯCLN(x, y) = 1. Các cặp là (1, 12) và (3, 4) => (6, 72) và (18, 24).',
      hint: 'xy = 432 / 36 = 12. Cặp (2, 6) loại vì ước chung lớn hơn 1.'
    },
    {
      id: 'ucln-15-v3',
      floor: 15,
      levelTitle: 'Mức độ 3: Trạm Kiểm Soát 3',
      question: 'Tìm hai số x và y (x ≤ y) biết x · y = 576 và ƯCLN(x, y) = 4.',
      options: [
        '(x, y) ∈ {(4, 144), (12, 48), (16, 36)}',
        '(x, y) ∈ {(4, 144), (16, 36)}',
        '(x, y) ∈ {(4, 144), (36, 16)}',
        '(x, y) = (4, 144)'
      ],
      correctIndex: 1,
      explanation: '16mn = 576 => mn = 36. Cặp (m, n) có ƯCLN = 1 và m ≤ n là (1, 36) và (4, 9) => (4, 144) và (16, 36).',
      hint: 'mn = 36. Cặp (4, 9) có ƯCLN = 1.'
    }
  ],

  16: [
    {
      id: 'ucln-16-v1',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Với mọi số tự nhiên n, ƯCLN(2n + 3, 3n + 4) bằng bao nhiêu?',
      options: [
        '2',
        '1 (Hai số nguyên tố cùng nhau)',
        '3',
        'Phụ thuộc vào n chẵn hay lẻ'
      ],
      correctIndex: 1,
      explanation: 'Đặt d = ƯCLN(2n + 3, 3n + 4). Ta có 3(2n + 3) - 2(3n + 4) = (6n + 9) - (6n + 8) = 1 ⋮ d => d = 1.',
      hint: 'Triệt tiêu số hạng chứa n: lấy 3(2n + 3) trừ đi 2(3n + 4).'
    },
    {
      id: 'ucln-16-v2',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Chứng minh rằng với mọi số tự nhiên n thì ƯCLN(2n + 1, 3n + 1) bằng:',
      options: [
        '1',
        '2',
        'n',
        '3'
      ],
      correctIndex: 0,
      explanation: 'Xét 3(2n + 1) - 2(3n + 1) = (6n + 3) - (6n + 2) = 1 chia hết cho ước chung => ƯCLN = 1.',
      hint: 'Nhân 2n + 1 với 3 và 3n + 1 với 2 rồi trừ cho nhau.'
    },
    {
      id: 'ucln-16-v3',
      floor: 16,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm ƯCLN(3n + 2, 5n + 3) với mọi n ∈ ℕ.',
      options: [
        '1',
        '2',
        '5',
        'n + 1'
      ],
      correctIndex: 0,
      explanation: '5(3n + 2) - 3(5n + 3) = (15n + 10) - (15n + 9) = 1 => ƯCLN luôn bằng 1.',
      hint: 'Nhân (3n + 2) với 5 và (5n + 3) với 3 rồi trừ nhau.'
    }
  ],

  17: [
    {
      id: 'ucln-17-v1',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Phân số A = (12n + 1)/(30n + 2) là phân số gì với mọi n tự nhiên?',
      options: [
        'Rút gọn được cho 2 khi n lẻ',
        'Rút gọn được cho 3',
        'Phân số tối giản',
        'Rút gọn được cho 5'
      ],
      correctIndex: 2,
      explanation: '5(12n + 1) - 2(30n + 2) = (60n + 5) - (60n + 4) = 1 chia hết cho ƯCLN(tử, mẫu) => ƯCLN = 1 nên phân số luôn tối giản.',
      hint: 'Nhân tử với 5 và mẫu với 2 để triệt tiêu 60n.'
    },
    {
      id: 'ucln-17-v2',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Phân số B = (14n + 3)/(21n + 4) có tối giản với mọi n ∈ ℕ không?',
      options: [
        'Luôn tối giản với mọi n',
        'Rút gọn được khi n chia hết cho 7',
        'Rút gọn được khi n là số lẻ',
        'Chưa thể kết luận'
      ],
      correctIndex: 0,
      explanation: '3(14n + 3) - 2(21n + 4) = (42n + 9) - (42n + 8) = 1. Do đó ƯCLN của tử và mẫu luôn bằng 1.',
      hint: 'Nhân tử với 3, mẫu với 2: 42n + 9 - (42n + 8) = 1.'
    },
    {
      id: 'ucln-17-v3',
      floor: 17,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Chứng minh phân số C = (21n + 4)/(14n + 3) luôn tối giản. Giá trị ƯCLN của tử và mẫu là:',
      options: [
        '1',
        '7',
        '3',
        '2'
      ],
      correctIndex: 0,
      explanation: '2(21n + 4) - 3(14n + 3) = (42n + 8) - (42n + 9) = -1 => ƯCLN = 1.',
      hint: 'Tương tự, hiệu bội số là 1.'
    }
  ],

  18: [
    {
      id: 'ucln-18-v1',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm số tự nhiên n để phân số B = (n + 6)/(n + 1) rút gọn được.',
      options: [
        'n = 5k + 4 (với k ∈ N)',
        'n = 5k + 1 (với k ∈ N)',
        'n = 5k + 2 (với k ∈ N)',
        'n = 6k + 1 (với k ∈ N)'
      ],
      correctIndex: 0,
      explanation: '(n + 6)/(n + 1) = 1 + 5/(n + 1). Phân số rút gọn được khi (n + 1) chia hết cho 5 => n + 1 = 5m => n = 5m - 1 = 5k + 4.',
      hint: 'Tách tử: (n + 6) = (n + 1) + 5. Mẫu (n + 1) phải chia hết cho 5.'
    },
    {
      id: 'ucln-18-v2',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm n ∈ ℕ để phân số D = (n + 7)/(n - 2) (n > 2) rút gọn được.',
      options: [
        'n - 2 chia hết cho 3 (tức n = 3k + 2)',
        'n = 7k + 2',
        'n = 5k + 1',
        'n chia hết cho 9'
      ],
      correctIndex: 0,
      explanation: '(n + 7)/(n - 2) = 1 + 9/(n - 2). Rút gọn được khi ƯCLN(n - 2, 9) > 1, tức (n - 2) ⋮ 3 => n = 3k + 2.',
      hint: '(n + 7) = (n - 2) + 9. Ước nguyên tố của 9 là 3.'
    },
    {
      id: 'ucln-18-v3',
      floor: 18,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Tìm điều kiện của n ∈ ℕ để phân số E = (2n + 5)/(n + 1) rút gọn được.',
      options: [
        'n chia hết cho 3',
        'n là số lẻ (n = 3k + 2)',
        'n = 3k + 1 (với k ∈ ℕ)',
        'n = 3k + 2 (với k ∈ ℕ)'
      ],
      correctIndex: 3,
      explanation: '2n + 5 = 2(n + 1) + 3. Để rút gọn được thì (n + 1) phải chia hết cho 3 => n + 1 = 3m => n = 3m - 1 = 3k + 2.',
      hint: 'Tách: 2n + 5 = 2(n + 1) + 3. Phân số rút gọn được khi n + 1 chia hết cho 3.'
    }
  ],

  19: [
    {
      id: 'ucln-19-v1',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Cho a, b nguyên tố cùng nhau. Khẳng định nào sau đây về (a + b) và a · b là đúng?',
      options: [
        'Chúng luôn chia hết cho 2',
        'ƯCLN của chúng luôn bằng a + b',
        'Chúng luôn nguyên tố cùng nhau (ƯCLN = 1)',
        'Chưa thể khẳng định, phụ thuộc vào a và b'
      ],
      correctIndex: 2,
      explanation: 'Nếu d là ước nguyên tố của (a + b) và ab thì d | a hoặc d | b. Do d | (a + b) nên d chia hết cả hai số a và b, trái với giả thiết ƯCLN(a, b) = 1. Vậy ƯCLN(a + b, ab) = 1.',
      hint: 'Dùng phương pháp phản chứng với ước nguyên tố d.'
    },
    {
      id: 'ucln-19-v2',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Cho hai số tự nhiên a và b nguyên tố cùng nhau. Hỏi ƯCLN(a, a + b) bằng bao nhiêu?',
      options: [
        '1',
        '2',
        'a',
        'b'
      ],
      correctIndex: 0,
      explanation: 'Gọi d = ƯCLN(a, a + b) => d | a và d | (a + b) => d | [(a + b) - a] = b. Do đó d là ước chung của a và b => d = 1.',
      hint: 'Nếu d chia hết cho a và a + b thì d phải chia hết cho (a + b - a) = b.'
    },
    {
      id: 'ucln-19-v3',
      floor: 19,
      levelTitle: 'Mức độ 4: Bồi dưỡng HSG',
      question: 'Nếu a và b nguyên tố cùng nhau thì ƯCLN(a², b) bằng bao nhiêu?',
      options: [
        'a',
        'b',
        '1',
        'a · b'
      ],
      correctIndex: 2,
      explanation: 'Vì a và b không có ước nguyên tố chung nên a² và b cũng không có ước nguyên tố chung => ƯCLN(a², b) = 1.',
      hint: 'a² chỉ chứa các ước nguyên tố của a.'
    }
  ],

  20: [
    {
      id: 'ucln-20-v1',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP PHÂN RÃ (BOSS ƯC)',
      question: 'Tìm ƯCLN(2n + 1, [n(n + 1)]/2) với n là số tự nhiên.',
      options: [
        '2',
        '1',
        'n',
        'n + 1'
      ],
      correctIndex: 1,
      explanation: 'Vì 2n + 1 là số lẻ nên ước chung d cũng lẻ. Xét 4 · [n(n+1)/2] = 2n² + 2n = n(2n + 1) + n. Vì d | (2n + 1) nên d | n => d | 2n. Kết hợp d | (2n + 1) suy ra d | 1 => d = 1.',
      hint: '2n + 1 luôn là số lẻ. Nhân biểu thức thứ hai với 4 rồi phân tích theo 2n + 1.'
    },
    {
      id: 'ucln-20-v2',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP PHÂN RÃ (BOSS ƯC)',
      question: 'Tìm ƯCLN(2n + 1, 2n² - 1) với mọi số tự nhiên n.',
      options: [
        '1',
        '3',
        '2',
        'n'
      ],
      correctIndex: 0,
      explanation: 'Ta có 2(2n² - 1) = 4n² - 2 = (2n + 1)(2n - 1) - 1. Nếu d là ước chung thì d | 1 => d = 1.',
      hint: 'Biến đổi: 4n² - 1 = (2n - 1)(2n + 1) chia hết cho (2n + 1).'
    },
    {
      id: 'ucln-20-v3',
      floor: 20,
      levelTitle: 'ĐỈNH THÁP PHÂN RÃ (BOSS ƯC)',
      question: 'Tìm số nguyên tố p sao cho p + 2 và p + 4 cũng là các số nguyên tố.',
      options: [
        'p = 3',
        'p = 5',
        'p = 7',
        'Không tồn tại p'
      ],
      correctIndex: 0,
      explanation: 'Nếu p = 3 thì p + 2 = 5, p + 4 = 7 đều nguyên tố. Nếu p > 3 thì p có dạng 3k + 1 hoặc 3k + 2. Khi đó hoặc p + 2 hoặc p + 4 chia hết cho 3 và lớn hơn 3 nên là hợp số. Vậy duy nhất p = 3.',
      hint: 'Xét số dư của p khi chia cho 3: 3k, 3k + 1, 3k + 2.'
    }
  ]
};
