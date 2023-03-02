import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByUsersServices {
  async execute(idUsers: ObjectId[]) {
    const room = await ChatRoom.findOne({
      idUsers: {
        $all:  idUsers
      }
    }).exec();

    return room;
  }
}

export { GetChatRoomByUsersServices };