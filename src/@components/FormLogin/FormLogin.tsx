import { useMutation } from '@tanstack/react-query';
import { Alert, Button, Form, Input } from 'antd';
import { api } from '../../@common';
import { useEffect, useState } from 'react';

export const FormLogin = () => {
	const [formData, setFormData] = useState({
		email: '',
		senha: '',
	});

	const { data, isPending, mutateAsync } = useMutation({
		mutationFn: async () =>
			api
				.post('/api.php', formData, {
					params: {
						action: 'login',
					},
				})
				.then((res) => res.data),
	});

	const onFinish = async (values: { email: string; senha: string }) => {
		setFormData(values);
		await mutateAsync();
	};

	useEffect(() => {
		if (data?.status === 'success') {
			window.location.reload();
		}
	}, [data]);

	return (
		<Form
			size='large'
			layout='vertical'
			title='Acessar sua Conta'
			onFinish={onFinish}
			disabled={isPending}
		>
			<Form.Item
				name='email'
				rules={[
					{
						required: true,
						message: 'Por favor, insira seu e-mail!',
					},
					{
						type: 'email',
						message: 'Por favor, insira um e-mail válido!',
					},
				]}
			>
				<Input placeholder='Seu e-mail' type='email' />
			</Form.Item>

			<Form.Item
				name='senha'
				rules={[
					{
						required: true,
						message: 'Por favor, insira sua senha!',
					},
				]}
			>
				<Input.Password placeholder='Sua senha' type='password' />
			</Form.Item>

			<Form.Item>
				<Button type='primary' htmlType='submit' block loading={isPending}>
					ENVIAR
				</Button>
			</Form.Item>

			{data?.message ? <Alert message={data?.message} type='error' /> : null}
		</Form>
	);
};
