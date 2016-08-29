import {
  ImagePickerManager,
}from 'NativeModules';
import {NativeModules} from 'react-native';
import {BASE_PATH} from '../../config';
import Promise  from 'bluebird';

let options = {
  title: '问题图片', // specify null or empty string to remove the title
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: '从相册选择', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 300, // photos only
  maxHeight: 300, // photos only
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};

class ImagePicker {
  static chooseAddPicType(url,data) {

  return new Promise(function(resolve, reject){
      ImagePickerManager.showImagePicker(options, (response) => {
      

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri.replace('file://', ''),
          isStatic: true
        };
        //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        let obj = {
                    uri:response.uri,// either an 'assets-library' url (for files from photo library) or an image dataURL
                    uploadUrl: `${BASE_PATH}/${url}`,
                    fileName: 'client.jpg',
                    mimeType:{
                      'Content-type':'application/json'
                    },
                    headers: {
                      'Content-type':'application/json'
                    },
                    data: data
                };
        NativeModules.FileTransfer.upload(obj, (err, res) => {
              if(err){
                reject(err);
                
              }else{
                if(res.status === 200) {
                     resolve(JSON.parse(res.data));
                }else {
                  reject(new Error('sometiong wrong'))
                }
               
              }  
            });
        }
      });
    });
   
  }
  static launchCamera(options) {
   
    ImagePickerManager.launchCamera(options, (response) => {
    
    });
  }

  static launchImageLibrary(options) {
    ImagePickerManager.launchImageLibrary(options, (response) => {

    });
  }
}



export default ImagePicker;