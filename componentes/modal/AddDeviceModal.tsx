import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import DeviceService from '../../services/DeviceService';

type FieldType = {
  identifier?: string;
};


export function AddDeviceModal () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    DeviceService.addDevice({identifier: values.identifier});
    window.location.reload();
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Device
      </Button>
      <Modal title="Add Device" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Identifier"
            name="identifier"
            rules={[{ required: true, message: 'input device identifier' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Adicionar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
