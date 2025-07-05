import { api } from '@common/api';
import './Contato.css';
import { Form, Input, message } from 'antd';

export const Contato = () => {
	const onFinish = (values: {
		nome: string;
		email: string;
		telefone: string;
	}) => {
		const { nome, email, telefone } = values;
		api.post('/api.php', { nome, email, telefone }, { params: { action: 'contatos' } }).then((res) => {
			if(res.data.success){
				message.success("Contato enviado com sucesso");
			}else{
				message.error(res.data.error);
			}
		});
	};

	return (
		<section className='container mb-5'>
			<div className='row'>
				<div className='contato-conteudo'>
					<div className='col-lg-7'>
						<h4>Fale conosco</h4>
						<h1>Contato</h1>
						<div className='conteudo-texto'>
							<p>
								Entre em contato conosco! Aqui na <b>TechManager Academy</b>,
								acreditamos que a educação é a chave para o crescimento e a
								transformação. Estamos comprometidos em oferecer a melhor
								experiência de aprendizado possível e teremos o prazer em
								ajudá-lo(a) em sua jornada. Sua evolução é a nossa prioridade!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='row g-0'>
				<img src='/Imagem_Contato.png' alt='CONTATO' className='col-lg-6' />
				<div className='col-lg-6 form-contato'>
					<div className='form-conteudo'>
						<h3>Entre em Contato</h3>
						<p>Preencha abaixo o formulário que logo entraremos em contato</p>
						<Form layout='vertical' onFinish={onFinish} requiredMark={false}>
							<Form.Item
								name='nome'
								rules={[
									{ required: true, message: 'Por favor, insira seu nome!' },
								]}
							>
								<Input
									placeholder='Seu nome'
									className='custom-input'
									type='text'
								/>
							</Form.Item>

							<Form.Item
								name='email'
								rules={[
									{ required: true, message: 'Por favor, insira seu e-mail!' },
									{
										type: 'email',
										message: 'Por favor, insira um e-mail válido!',
									},
								]}
							>
								<Input
									placeholder='Seu e-mail'
									className='custom-input'
									type='email'
								/>
							</Form.Item>

							<Form.Item
								name='telefone'
								rules={[
									{
										required: true,
										message: 'Por favor, insira seu telefone!',
									},
									{ pattern: /^\d+$/, message: 'Digite apenas números!' },
								]}
							>
								<Input
									placeholder='Seu telefone'
									className='custom-input'
									type='text'
								/>
							</Form.Item>

							<button type='submit' className='botao-form'>
								ENVIAR
							</button>
						</Form>
					</div>
				</div>
			</div>
		</section>
	);
};
