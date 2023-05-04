import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
// import onUploadFile from "./upload-img";

export default function CreateNFT() {
  const [files, setFiles] = useState<File[] | null>(null);
  // defining the onFileUploadChange handler
  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("From onFileUploadChange");
    const fileInput = e.target;

    if (!fileInput.files) {
      console.log("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.log("Files list is empty");
      return;
    }

    /** File validation */
    Array.from(e.target.files).forEach((file) => {
      if (!file.type.startsWith("image")) {
        console.log("Please select a valide image");
        return;
      }
    });

    /** Setting file state */
    setFiles(e.target.files); // we will use the file state, to send it later to the server

    /** Reset file input */
    // e.currentTarget.type = "text";
    // e.currentTarget.type = "file";
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      console.log(file);
      formData.append(file.name, file);
      // console.log(formData);
    });

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    // console.log(formData);

    const res = await axios.post(
      "http://localhost:3011/api/fino-image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res;
  };
  // function handleClick() {
  //   // get the files from the fileList as an array
  //   let files = data.fileList;
  //   // initialize formData object
  //   const formData = new FormData();
  //   // loop over files and add to formData
  //   files.forEach((file) => formData.append("files", file));
  //   NFTApi.upload();
  // }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          CREATE NFT
        </Link>
        <div className="w-full max-w-3xl md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="nft-symbol"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Symbol
                </label>
                <input
                  type="text"
                  name="nft-symbol"
                  id="nft-symbol"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                  placeholder="NFT symbol"
                />
              </div>
              <div>
                <label
                  htmlFor="nft-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="nft-name"
                  id="nft-name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                  placeholder="NFT name"
                />
              </div>
              <div>
                <label
                  htmlFor="nft-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Total Supply
                </label>
                <input
                  type="text"
                  name="nft-name"
                  id="nft-name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                  placeholder="Total supply"
                />
              </div>
              <div>
                <label
                  htmlFor="nft-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Base Price
                </label>
                <input
                  type="text"
                  name="nft-name"
                  id="nft-name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="Issue price"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="nft-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Descriptions
                </label>
                <textarea
                  id="descriptions"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="file_input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Owned Files
                </label>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="col-span-2">
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={onFileUploadChange}
                      multiple
                    />
                  </div>
                  <button
                    type="button"
                    onClick={onUploadFile}
                    className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
