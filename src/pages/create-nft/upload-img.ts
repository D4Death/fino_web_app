import axios from "axios";
import { MouseEvent } from "react";
import { UploadImgResponse } from "../../core/model/nft/upload-image.response";

const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
  const formData = new FormData();

  console.log(e.target.files);

  Array.from(e.target.files).forEach((file) => {
    formData.append(e.target.name, file);
  });

  console.log(formData);
  const res = await axios.post<UploadImgResponse[]>(
    "localhost:3011/api/fino-image",
    req
  );

  return res;
};

export default onUploadFile;
