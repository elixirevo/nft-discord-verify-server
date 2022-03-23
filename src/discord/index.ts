import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lib = require('lib')({
  token: process.env.STDLIB_SECRET_TOKEN,
});

export async function updateRole(userId: string) {
  await lib.discord.guilds['@0.2.3'].members.roles.update({
    guild_id: process.env.DISCORD_GUILD_ID,
    user_id: userId,
    role_id: process.env.DISCORD_ROLE_ID,
  });
}
