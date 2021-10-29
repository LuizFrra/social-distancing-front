import { Modal } from 'antd';

// build an modal that display device information
const DeviceConfigModal = ({ visible, onCancel, onOk, device }) => {
  return (
    <Modal
      title={`Configuración del dispositivo ${device.name}`}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText="Guardar"
      cancelText="Cancelar"
    >
      <p>
        <b>Nombre:</b> {device.name}
      </p>
      <p>
        <b>Descripción:</b> {device.description}
      </p>
      <p>
        <b>Tipo:</b> {device.type}
      </p>
      <p>
        <b>Fecha de creación:</b> {device.createdAt}
      </p>
      <p>
        <b>Fecha de actualización:</b> {device.updatedAt}
      </p>
    </Modal>
  );
};

export default DeviceConfigModal;
