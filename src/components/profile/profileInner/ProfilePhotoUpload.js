import React from "react";
import ModalBody from "../../common/ModalBody";
import { MDBBtn } from "mdbreact";
import FileInput from "../../common/FileInput";
import Cropper from "react-easy-crop";
import SelectPhot from "../../../assets/images/profile/selectPhoto.png";
import Portrait from "../../../assets/images/profile/portrait.png";
export default function ProfilePhotoUpload({
  modal,
  toggle,
  photoLink,
  setPhotoLink,
  photo,
  onDone,
  crop,
  setCrop,
  onCropComplete,
  photoCancel,
  showCroppedImage
}) {
  const setInnerPhotoLink = val => {
    setPhotoLink(val);
  };
  return (
    <ModalBody
      modal={modal}
      toggle={toggle}
      classNames={["photo-upload-modal"]}
      title="Update Profile Picture"
    >
      <div className="photo-upload-modal">
        <div className="photo-upload-header">
          <ul>
            <li
              onClick={() => setInnerPhotoLink(1)}
              className={photoLink === 1 ? "active" : null}
            >
              {" "}
              <i class="fas fa-camera"></i> Take Photo
            </li>
            <li
              onClick={() => setInnerPhotoLink(2)}
              className={photoLink === 2 ? "active" : null}
            >
              {" "}
              <i class="fas fa-upload"></i> Upload Photo
            </li>
            <li
              onClick={() => setInnerPhotoLink(3)}
              className={photoLink === 3 ? "active" : null}
            >
              {" "}
              <i class="fas fa-image"></i> Select Photo
            </li>
          </ul>
        </div>

        <div className="photo-upload-wrapper">
          {photoLink === 1 && (
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

          {photoLink === 2 && (
            <div className="upload-photo-area">
              {!photo && (
                <React.Fragment>
                  <FileInput onDone={onDone}>
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

              {photo && (
                <div className="upload-previo-area">
                  <Cropper
                    image={photo.base64}
                    crop={crop}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                  />
                  {/* <img src={photo.base64} alt="photo" /> */}
                  <div className="photo-upload-btn-area d-flex ">
                    <MDBBtn color="danger" onClick={photoCancel}>
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

          {photoLink === 3 && (
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
