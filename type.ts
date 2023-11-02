import { Server, Member, Profile } from "@prisma/client";

export type ServerWothMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
