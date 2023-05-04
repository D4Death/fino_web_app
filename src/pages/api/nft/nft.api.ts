import { UploadImgResponse } from "../../../core/model/nft/upload-image.response";
import FinoAxios from "../../../core/network/fino-axios";

export default class NFTApi extends FinoAxios {
  public constructor() {
    super("http://localhost:3011");
  }

  public upload = async (req: any): Promise<UploadImgResponse[]> => {
    console.log(req);
    return await this.instance.post("api/fino-image", req);
  };

  public createNFT = async (req: CreateNFTRequest): Promise<string> => {
    console.log(req);
    return await this.instance.post("/create-nft", req);
  };
}
