type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

  let profile11: Profile = {
   username: "Kartik",
   bio: null, // Explicitly no bio provided
   // avatarUrl is optional and not provided here
};

let profile2: Profile = {
   username: "Sakshi",
   bio: "Software Engineer",
   avatarUrl: "https://example.com/avatar.jpg",
};

function show(user: Profile): void {
  let Bio = user.bio === null ? "Bio not provided" : `Bio: ${user.bio}`;
  let avatarInfo = user.avatarUrl ? `Avatar: ${user.avatarUrl}` : "Avatar not set";
  console.log(`${user.username} - ${Bio}, ${avatarInfo}`);
}

show(profile11); // Kartik - Bio not provided, Avatar not set
show(profile2); // Sakshi - Bio: Software Engineer, Avatar: https://example.com/avatar.jpg