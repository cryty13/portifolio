import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";


export function Contact({ children }) {

    const validacao = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório'),
        lastName: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    })
    return (
        <>
            <section id="contact" className="text-gray-700 body-font relative">
                <Formik
                    initialValues={{
                        nome: '',
                        email: '',
                        lastName: '',
                        message: '',
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        resetForm()
                    }}
                    validationSchema={validacao}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                        resetForm
                    }) => (
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="max-w-screen-md mx-auto p-5">
                                <div className="text-center mb-6">
                                    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                                        Contact
                                    </p>
                                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                        Get In <span className="text-sky-500">Touch</span>
                                    </h3>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label name="nome" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Name</label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="nome"
                                            onChange={handleChange}
                                            value={values.nome}
                                            type="text"
                                            placeholder="Name" />
                                        {errors.nome && touched.nome ? (<div>{' '}<p className="text-red-600">{errors.nome}</p>{' '}</div>) : null}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={values.lastName}
                                            type="text"
                                            placeholder="last name" />
                                        {errors.lastName && touched.lastName ? (<div>{' '}<p className="text-red-600">{errors.lastName}</p>{' '}</div>) : null}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Email Address
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="email"
                                            placeholder="********@*****.**"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email} />
                                        {errors.email && touched.email ? (<div>{' '}<p className="text-red-600">{errors.email}</p>{' '}</div>) : null}
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Your Message
                                        </label>
                                        <textarea
                                            rows="5"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            name="message"
                                            onChange={handleChange}
                                            value={values.message}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="flex justify-between w-full px-3">
                                        <div className="md:flex md:items-center">
                                        </div>
                                        <button
                                            className="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                            type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </section>
        </>
    );


}
