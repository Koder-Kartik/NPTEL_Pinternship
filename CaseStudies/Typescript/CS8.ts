type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

const profile1: Profile = {
  username: "Kartik",
  bio: null,
};

const profile2: Profile = {
  username: "Sakshi",
  bio: "Software Engineer",
  avatarUrl: "https://example.com/avatar.jpg",
};

const DEFAULT_AVATAR = "https://example.com/default-avatar.png";

function showProfile(user: Profile): void {
  const bioMessage = user.bio ?? "Bio not provided";
  const avatar = user.avatarUrl ?? DEFAULT_AVATAR;

  console.log(`Username: ${user.username}`);
  console.log(`Bio: ${bioMessage}`);
  console.log(`Avatar: ${avatar}`);
}

showProfile(profile1);
showProfile(profile2);
