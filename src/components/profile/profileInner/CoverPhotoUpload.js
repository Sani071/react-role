import React from "react";
import ModalBody from "../../common/ModalBody";
import { MDBBtn } from "mdbreact";
import FileInput from "../../common/FileInput";
import Cropper from "react-easy-crop";
import SelectPhot from "../../../assets/images/profile/selectPhoto.png";
import Portrait from "../../../assets/images/profile/portrait.png";

export default function CoverPhotoUpload({
  coverModal,
  coverToggle,
  setCoverPhotoLink,
  coverPhotoLink,
  photoLink,
  coverPhoto,
  onDoneCover,
  coverPhotoCancel,
  saveCoverHandler,
  crop,
  setCrop,
  onCropComplete,
  showCroppedImage
}) {
  const setInnerCoverPhotoLink = val => {
    setCoverPhotoLink(val);
  };
  return (
    <ModalBody
      modal={coverModal}
      toggle={coverToggle}
      classNames={["photo-upload-modal"]}
      title="Update Profile Picture"
    >
      <div className="photo-upload-modal">
        <div className="photo-upload-header">
          <ul>
            <li
              onClick={() => setInnerCoverPhotoLink(1)}
              className={coverPhotoLink === 1 ? "active" : null}
            >
              {" "}
              <i class="fas fa-camera"></i> Take Cover Photo
            </li>
            <li
              onClick={() => setInnerCoverPhotoLink(2)}
              className={coverPhotoLink === 2 ? "active" : null}
            >
              {" "}
              <i class="fas fa-upload"></i> Upload Photo
            </li>
            <li
              onClick={() => setInnerCoverPhotoLink(3)}
              className={coverPhotoLink === 3 ? "active" : null}
            >
              {" "}
              <i class="fas fa-image"></i> Select Photo
            </li>
          </ul>
        </div>

        <div className="photo-upload-wrapper">
          {coverPhotoLink === 1 && (
            <div className="upload-photo-area">
              <div className="icon-area">
                <img src={Portrait} alt="Portrait" />
              </div>
              <p>
                Take a photo of yourself so that your friends can easily find
                you.
              </p>
            </div>
          )}

          {coverPhotoLink === 2 && (
            <div className="upload-photo-area">
              {!coverPhoto && (
                <React.Fragment>
                  <FileInput onDone={onDoneCover}>
                    <div className="icon-area">
                      <i class="fas fa-upload"></i>
                    </div>
                  </FileInput>
                  <p>
                    Upload a good looking photo of yourselft directly from this
                    device.
                  </p>
                </React.Fragment>
              )}

              {coverPhoto && (
                <div className="upload-previo-area cover-photo">
                  {/* <img src={coverPhoto.base64} alt="photo" /> */}
                  <Cropper
                    image={coverPhoto.base64}
                    crop={crop}
                    aspect={8 / 2}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                  />

                  <div className="photo-upload-btn-area d-flex ">
                    <MDBBtn color="danger" onClick={coverPhotoCancel}>
                      {" "}
                      Cancel
                    </MDBBtn>
                    <MDBBtn color="success" onClick={showCroppedImage}>
                      Save
                    </MDBBtn>
                  </div>
                </div>
              )}
            </div>
          )}

          {coverPhotoLink === 3 && (
            <div className="select-photo-list-area">
              <h5>Uploaded Photos</h5>
              <div className="spla-item-area">
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
              </div>
              <h5>Timeline Photos</h5>
              <div className="spla-item-area">
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
                <div className="spla-item">
                  <img src={SelectPhot} alt="SelectPhot" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalBody>
  );
}
