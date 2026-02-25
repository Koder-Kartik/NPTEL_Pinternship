enum Role { Doctor, Nurse, Admin };

interface Staff {
    id: number;
    name: string;
    role: Role;
};

const staffMembers: Staff[] = [
    { id: 1, name: "Dr.Anjana", role: Role.Doctor },
    { id: 2, name: "Tanya", role: Role.Nurse },
    { id: 3, name: "Ritik", role: Role.Admin }
];

function printSummary(staffList: Staff[]): void {
    console.log("Staff Summary:");
    staffList.forEach((staff) => {
        console.log(`Name: ${staff.name}, Role: ${Role[staff.role]}`);
    });
}

printSummary(staffMembers);