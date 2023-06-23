import { SQL_INPUT_EXAMPLE } from '@/constants/examples';
import {getSchemaByExcel, getSchemaBySql} from '@/services/sqlService';
import {Button, Form, message, Modal, Space, Upload, UploadProps} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

interface Props {
  onSubmit: (values: TableSchema) => void;
  visible: boolean;
  onClose: () => void;
}

/**
 * 建表 SQL 输入模态框
 *
 * @constructor
 * @author https://github.com/zhashut
 */
const ExcelInput: React.FC<Props> = (props) => {
  const { onSubmit, visible, onClose } = props;
  const [form] = Form.useForm();

  /**
   * Excel 上传组件属性
   */
  const uploadProps: UploadProps = {
    name: 'file',
    showUploadList: false,
    customRequest: async (options) => {
      if (!options) {
        return;
      }
      try {
        const res = await getSchemaByExcel(options.file);
      } catch (e: any) {
        message.error('操作失败，' + e.message);
      }
    },
  };

  /**
   * sql 转为 schema
   * @param values
   */
  const onFinish = async (values: any) => {
    if (!values.sql) {
      return;
    }
    try {
      const res = await getSchemaBySql(values);
      onSubmit?.(res.data);
    } catch (e: any) {
      message.error('导入错误，' + e.message);
    }
  };

  return (
      <Modal title="导入 Excel" open={visible} footer={null} onCancel={onClose}>
        <Form<GenerateBySqlRequest>
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >
          <Form.Item
              name="sql"
              label={
                <>
                  请输入 Excel 工作表名称：
                </>
              }
              rules={[{ required: true, message: '请输入建表 SQL' }]}
          >
            <TextArea
                placeholder="请输工作表名称"
                autoSize={{ minRows: 1 }}
                defaultValue={"Sheet1"}
            />
          </Form.Item>
          <Form.Item>
            <Space size="large">
              <Upload {...uploadProps}>
                <Button>导入 Excel</Button>
              </Upload>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
  );
};

export default ExcelInput;
