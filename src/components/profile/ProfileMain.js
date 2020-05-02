import React, { useState, useCallback } from "react";
import ProfilePic from "../../assets/images/profile/profile.png";
// import ModalBody from "../common/ModalBody";
import ProfileLinkList from "./ProfileLinkList";
// import FileInput from "../common/FileInput";
// import { MDBBtn } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import {
  profilePic,
  coverPhotoAction
} from "../../store/actions/user/userProfile";
// import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import BasicInformationProfile from "./BasicInformationProfile";
import ProfilePhotoUpload from "./profileInner/ProfilePhotoUpload";
import CoverPhotoUpload from "./profileInner/CoverPhotoUpload";
import ProfileAboutMain from "./ProfileMain/ProfileAboutMain";
import { Route } from "react-router";
import ProfileTimeline from "./ProfileMain/ProfileTimeline";
import ProfileFriendMain from "./ProfileMain/ProfileFriendMain";
export default function ProfileMain() {
  const [modal, setModal] = useState(false);
  const [coverModal, setCoverModal] = useState(false);
  const [photoLink, setPhotoLink] = useState(2);
  const [coverPhotoLink, setCoverPhotoLink] = useState(2);
  const [photo, setPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropCover, setCropCover] = useState({ x: 0, y: 0 });
  const [cropPhoto, setCropPhoto] = useState(null);
  const [cropPhotoCover, setCropPhotoCover] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedAreaPixelsCover, setCroppedAreaPixelsCover] = useState(null);
  const toggle = () => {
    setModal(!modal);
    setPhotoLink(2);
  };

  const coverToggle = () => {
    setCoverModal(!coverModal);
    setCoverPhotoLink(2);
  };

  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated);
  const dispatch = useDispatch();
  const onDone = files => {
    console.log(files[0]);
    setPhoto(files[0]);
  };
  const onDoneCover = files => {
    setCoverPhoto(files[0]);
  };

  const photoCancel = () => {
    setPhoto();
  };

  const coverPhotoCancel = () => {
    setCoverPhoto();
  };

  // const saveHandler = () => {
  //   let data = new FormData();
  //   data.append("photo", photo.file);
  //   dispatch(profilePic(data));
  //   setModal(!modal);
  //   setPhoto(null);
  // };

  const saveCoverHandler = () => {
    let data = new FormData();
    data.append("coverPhoto", coverPhoto.file);
    dispatch(coverPhotoAction(data));
    setCoverModal(!coverModal);
    setCoverPhoto(null);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
    // showCroppedImage()
  }, []);

  const onCropCompleteCover = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixelsCover(croppedAreaPixels);
    // showCroppedImage()
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(photo.base64, croppedAreaPixels);
      console.log("donee", { croppedImage });

      toDataUrl(croppedImage, function (myBase64) {
        var file = dataURLtoFile(myBase64, "hello.jpg");
        setCropPhoto(file);

        let data = new FormData();
        data.append("photo", file);
        dispatch(profilePic(data));
        setModal(!modal);
        setPhoto(null);

        console.log(file);
      });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const showCroppedImageCover = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        coverPhoto.base64,
        croppedAreaPixelsCover
      );
      console.log("donee", { croppedImage });

      toDataUrl(croppedImage, function (myBase64) {
        var file = dataURLtoFile(myBase64, "hello.jpg");
        setCropPhotoCover(file);

        let data = new FormData();
        data.append("coverPhoto", file);
        dispatch(coverPhotoAction(data));
        setCoverModal(!coverModal);
        setCoverPhoto(null);

        console.log(file);
      });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixelsCover]);

  function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  if (!isAuthenticated) {
    return <h2>loading</h2>;
  }

  let basicInformationCheck = false;
  if (!user.gender || !user.nationality || !user.occupation || !user.birthDay) {
    basicInformationCheck = true;
  }
  return (
    <main>
      <section className="profile-banner">
        <div className="roy-container">
          {basicInformationCheck && <BasicInformationProfile />}

          <div className="profile-banner-content">
            <div className="cover-photo-area">
              {user.coverPhoto && (
                <img src={user.coverPhoto} alt="Cover Photo" />
              )}
              <a
                href="/"
                className="upload-btn"
                onClick={e => {
                  e.preventDefault();
                  coverToggle();
                }}
              >
                <i className="fas fa-camera"></i> Upload Cover Photo{" "}
              </a>
            </div>
            <div className="profile-photo-area-main">
              <div className="ppam-inner">
                <div className="ppam-photo-area">
                  <img
                    src={user.photo ? user.photo : ProfilePic}
                    alt="Profile Pic"
                  />
                  <div className="ppam-photo-overlay-area" onClick={toggle}>
                    <i className="fas fa-camera"></i>
                    Upload Photo
                  </div>
                </div>
              </div>
            </div>

            <ProfilePhotoUpload
              modal={modal}
              toggle={toggle}
              photoLink={photoLink}
              setPhotoLink={setPhotoLink}
              photo={photo}
              onDone={onDone}
              crop={crop}
              setCrop={setCrop}
              onCropComplete={onCropComplete}
              photoCancel={photoCancel}
              showCroppedImage={showCroppedImage}
            />
            <CoverPhotoUpload
              coverModal={coverModal}
              coverToggle={coverToggle}
              setCoverPhotoLink={setCoverPhotoLink}
              coverPhotoLink={coverPhotoLink}
              photoLink={photoLink}
              coverPhoto={coverPhoto}
              onDoneCover={onDoneCover}
              coverPhotoCancel={coverPhotoCancel}
              saveCoverHandler={saveCoverHandler}
              crop={cropCover}
              setCrop={setCropCover}
              onCropComplete={onCropCompleteCover}
              showCroppedImage={showCroppedImageCover}
            />
          </div>
          <ProfileLinkList />

          <Route path="/profile/about" component={ProfileAboutMain} />
          <Route path="/profile/timeline" component={ProfileTimeline} />
          <Route path="/profile/friends" component={ProfileFriendMain} />
        </div>
      </section>
    </main>
  );
}
