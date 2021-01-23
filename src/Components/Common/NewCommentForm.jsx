import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Button from 'antd/es/button'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const NewCommentForm = props => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields()
  }, [props.resetSwitch])

  const onFinish = formData => {
    props.onSubmit({comment: formData.comment}, props.page)
  }

  const onFinishFailed = errorInfo => {} // this function has to be defined

  return (
    <Form
    form={form}
      {...layout}
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{paddingTop: '50px', display: props.display}}
    >
      <Form.Item name="comment" rules={[]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="secondary" onClick={()=> form.resetFields()}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" disabled={props.disabled}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewCommentForm
