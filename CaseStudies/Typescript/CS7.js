var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
;
;
var staffMembers = [
    { id: 1, name: "Dr.Anjana", role: Role.Doctor },
    { id: 2, name: "Tanya", role: Role.Nurse },
    { id: 3, name: "Ritik", role: Role.Admin }
];
function printSummary(staffList) {
    console.log("Staff Summary:");
    staffList.forEach(function (staff) {
        console.log("Name: ".concat(staff.name, ", Role: ").concat(Role[staff.role]));
    });
}
printSummary(staffMembers);
