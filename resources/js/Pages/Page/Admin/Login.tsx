import { Head, usePage, useForm } from '@inertiajs/react';
import React, { FC } from "react";
import Container from '@/Components/_ui/Container/Container';
import AdminLayout from "@/Layouts/AdminLayout";
import TextInput from '@/Components/_ui/TextInput/TextInput';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import InputError from '@/Components/_ui/InputError/InputError';
import styles from './style.module.scss';

const Login: FC = () => {

	const {data, setData,post, errors } = useForm({
		username: '',
		password: '',
	});

	const sendForm = e => {
		e.preventDefault();
		console.log('send', data)
	}

	return (
			<AdminLayout>
				<Head title="Login"/>
					<Container>
						<div className={styles.login_wrp}>
							<form onSubmit={sendForm} className={styles.form}>
								<div className={styles.form_control}>
									<InputLabel htmlFor="username" value="Username"/>

									<TextInput
										id="username"
										type="text"
										name="username"
										value={data.username}
										onChange={(e) => setData('username', e.target.value)}
									/>

									{/*<InputError message={errors.email} />*/}
								</div>
								<div className={styles.form_control}>
									<InputLabel htmlFor="password" value="Password"/>

									<TextInput
										id="password"
										type="password"
										name="password"
										value={data.password}
										onChange={(e) => setData('password', e.target.value)}
									/>

									{/*<InputError message={errors.password} />*/}
								</div>
							</form>

							<div className={styles.button_wrp}>
								<PrimaryButton onClick={sendForm} className={styles.button}>Log in</PrimaryButton>
							</div>
						</div>
					</Container>
			</AdminLayout>
	);
}

export default Login;
