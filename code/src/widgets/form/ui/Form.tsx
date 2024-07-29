import { useForm } from 'react-hook-form';
import classes from './Form.module.css';
import cancel from 'shared/assets/images/cancel.svg';
import check from 'shared/assets/images/check circle.svg';
import { sendFormData } from 'shared/api/form';

export const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const watchedFields = watch();

    const onSubmit = async (data: any) => {
        try {
            await sendFormData(data);
            reset();
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <section className={[classes.form, ''].join('  ')} onSubmit={handleSubmit(onSubmit)} id='form'>
            <h2>Отправь форму</h2>
            <form>
                <div
                    className={[
                        classes['input-container'],
                        watchedFields.name ? classes.active : '',
                        errors?.name ? classes['error-border'] : '',
                    ].join(' ')}
                >
                    <input
                        type='text'
                        {...register('name', {
                            required: 'Поле обязательно к заполнению!',
                        })}
                        className={classes.input}
                    />
                    <label className={classes.label}>Имя</label>
                    {watchedFields.name ? (
                        errors?.name ? (
                            <img src={cancel} alt='cancel' />
                        ) : (
                            <img src={check} alt='check' />
                        )
                    ) : (
                        ''
                    )}
                    {errors?.name && (
                        <div className={classes.error}>
                            <p>{errors?.name?.message ? String(errors.name.message) : 'Error!'}</p>
                        </div>
                    )}
                </div>
                <div
                    className={[
                        classes['input-container'],
                        watchedFields.phone ? classes.active : '',
                        errors?.phone ? classes['error-border'] : '',
                    ].join(' ')}
                >
                    <input
                        type='text'
                        {...register('phone', {
                            required: 'Поле обязательно к заполнению!',
                            pattern: {
                                value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                                message: 'Телефон введен неверно',
                            },
                        })}
                        className={classes.input}
                    />
                    <label className={classes.label}>Телефон</label>
                    {watchedFields.phone ? (
                        errors?.phone ? (
                            <img src={cancel} alt='cancel' />
                        ) : (
                            <img src={check} alt='check' />
                        )
                    ) : (
                        ''
                    )}
                    {errors?.phone && (
                        <div className={classes.error}>
                            <p>{errors?.phone?.message ? String(errors.phone.message) : 'Error!'}</p>
                        </div>
                    )}
                </div>
                <label htmlFor='checkbox' className={classes.checkbox}>
                    <input type='checkbox' name='checkbox' id='checkbox' />
                    Согласен, отказываюсь
                </label>
                <input type='submit' className={classes.submit} />
            </form>
        </section>
    );
};
