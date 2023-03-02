import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService {
  async exucute(idUsers: string[]) {
    const room = await ChatRoom.create({
      idUsers
    });

    return room;
  };
};

export { CreateChatRoomService };
