
console.log("========== QUAN LY PHIEU MUON SACH THU VIEN ==========");

// BUOC 1: KHOI TAO 3 PHIEU MUON
let borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "Lap trinh JavaScript",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Co so du lieu MySQL",
        borrowDays: 20,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Clean Code",
        borrowDays: 16,
        isReturned: false
    }
];

console.log("BUOC 1: Danh sach phieu muon ban dau");
console.table(borrowRecords);


// BUOC 2: CREATE - THEM PHIEU PM04 BANG push()
borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.log("BUOC 2: Da them phieu PM04");
console.table(borrowRecords);


// BUOC 3: READ - KIEM TRA QUA HAN VA TINH PHI PHAT
console.log("BUOC 3: Kiem tra phi phat qua han");

let totalFine = 0;
let overdueCount = 0;

for (let i = 0; i < borrowRecords.length; i++) {
    let record = borrowRecords[i];

    // Chi tinh phat cho sach chua tra
    if (record.isReturned === false && record.borrowDays > 14) {
        let fine = (record.borrowDays - 14) * 5000;

        totalFine += fine;
        overdueCount++;

        console.log(
            "Ma phieu:", record.recordId,
            "| Sinh vien:", record.studentId,
            "| Sach:", record.bookTitle,
            "| So ngay muon:", record.borrowDays,
            "| Tien phat:", fine.toLocaleString("vi-VN"), "VND"
        );
    } else {
        console.log(
            "Ma phieu:", record.recordId,
            "| Khong phat"
        );
    }
}

console.log("Tong so phieu qua han:", overdueCount);
console.log("Tong tien phat:", totalFine.toLocaleString("vi-VN"), "VND");


// BUOC 4: UPDATE - CAP NHAT PM01 DA TRA SACH
for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM01") {
        borrowRecords[i].isReturned = true;
        console.log("BUOC 4: Phieu PM01 da duoc cap nhat tra sach");
        break;
    }
}

console.table(borrowRecords);


// BUOC 5: DELETE - XOA PHIEU PM03 BANG splice()
for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        borrowRecords.splice(i, 1);
        console.log("BUOC 5: Da xoa phieu PM03");
        break;
    }
}

console.table(borrowRecords);


// BUOC 6: BAO CAO CUOI CUNG
let returnedCount = 0;
let borrowingCount = 0;
let finalOverdueCount = 0;
let finalFine = 0;

for (let i = 0; i < borrowRecords.length; i++) {
    let record = borrowRecords[i];

    if (record.isReturned === true) {
        returnedCount++;
    } else {
        borrowingCount++;

        if (record.borrowDays > 14) {
            finalOverdueCount++;
            finalFine += (record.borrowDays - 14) * 5000;
        }
    }
}

console.log("==================================================");
console.log("             BAO CAO THU VIEN CUOI CUNG");
console.log("==================================================");

console.table(borrowRecords);

console.log("Tong so phieu con lai:", borrowRecords.length);
console.log("So phieu da tra:", returnedCount);
console.log("So phieu dang muon:", borrowingCount);
console.log("So phieu qua han:", finalOverdueCount);
console.log("Tong tien phat cac phieu con lai:", finalFine.toLocaleString("vi-VN"), "VND");

console.log("==================================================");