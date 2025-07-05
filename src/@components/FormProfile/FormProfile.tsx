import { Button, Form, Input } from 'antd';
import { useAuth } from '@hooks/useAuth';
import { useEffect, useState } from 'react';
import { api } from '@common/api';

export const FormProfile = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [form] = Form.useForm();

	const { data: profile, refetch } = useAuth();

	const onFinish = (values: { nome: string; email: string }) => {
		setIsLoading(true);
		api
			.put('/api.php', values, {
				params: {
					action: 'updateProfile',
				},
			})
			.then(() => {
				refetch();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		form.setFieldsValue(profile?.data);
	}, [profile, form]);
	return (
		<Form
			onFinish={onFinish}
			layout='vertical'
			requiredMark={false}
			disabled={isLoading}
			form={form}
		>
			<Form.Item name='nome' rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name='email' rules={[{ required: true }]}>
				<Input disabled />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' loading={isLoading}>
					ATUALIZAR
				</Button>
			</Form.Item>
		</Form>
	);
};
