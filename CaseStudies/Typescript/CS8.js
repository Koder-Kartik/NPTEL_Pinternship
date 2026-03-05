var profile1 = {
    username: "Kartik",
    bio: null,
};
var profile2 = {
    username: "Sakshi",
    bio: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
};
var DEFAULT_AVATAR = "https://example.com/default-avatar.png";
function showProfile(user) {
    var _a, _b;
    var bioMessage = (_a = user.bio) !== null && _a !== void 0 ? _a : "Bio not provided";
    var avatar = (_b = user.avatarUrl) !== null && _b !== void 0 ? _b : DEFAULT_AVATAR;
    console.log("Username: ".concat(user.username));
    console.log("Bio: ".concat(bioMessage));
    console.log("Avatar: ".concat(avatar));
}
showProfile(profile1);
showProfile(profile2);
