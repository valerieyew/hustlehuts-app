import classNames from "classnames";
import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Modal, { Props } from "react-modal";

interface IProps extends Props {
  className?: string;
  modalHeader?: ReactElement | ReactNode;
  modalFooter?: ReactElement | ReactNode;
  modalBody: ReactElement | ReactNode;
}
Modal.setAppElement("#root");

const RCModal: React.FC<IProps> = (Props) => {
  const { isOpen, className, modalBody, modalHeader, modalFooter, ...rest } =
    Props;
  return (
    <Modal className={classNames(className, "modal")} shouldCloseOnOverlayClick={true} isOpen={isOpen} {...rest}>
      <div className="modal-scroller">
        {modalHeader}
        {modalBody}
        {modalFooter}
      </div>
    </Modal>
  );
};

export default styled(RCModal)`
`;
