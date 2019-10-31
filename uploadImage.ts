const uploadImage = async (method, url, file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader(`Content-Type`, file.type);
    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(new Error(`Request failed, Status ${xhr.status}`));
      }

      resolve(xhr.responseText);
    };
    xhr.send(file);
  });
};

// image === image in local phone
export const uploadImageToS3 = async (image, signS3) => {
  await uploadImage(`PUT`, signS3.uploadURL, {
    uri: image,
    type: `image/jpeg`
  });

  return { image, remoteUrl: signS3.url };
};
