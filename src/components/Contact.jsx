import {useState} from 'react'

function Contact (){

    // Parte de conexão com o backend
    const [formData, setFormData] = useState({
        primeiroNome: "",
        ultimoNome: "",
        email: "",
        celular: "",
        mensagem: "",
    })

    const [formErrors, setFormErrors] = useState({
        celular: "",
        camposObrigatorios: false,
    })

    const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    if (formErrors[name] && value.trim() !== "") {
        setFormErrors((prev) => {
            const newErrors = { ...prev }
            delete newErrors[name]
            return newErrors
        })
        }
    }

    const handleSubmit = async () => {
        const errors = {}
        const celularLimpo = formData.celular.replace(/[()\-\s]/g, "")
         // 1. Validação do email
        if (!formData.email.includes("@") || formData.email.length < 10) {
            setFormErrors({ email: "Email inválido", camposObrigatorios: false })
            return
        }
        // 2. Verificação do número
        if (!/^[0-9()\-\s]+$/.test(formData.celular) || celularLimpo.length < 10) {
            setFormErrors({ celular: "Formato de número inválido", camposObrigatorios: false })
            return
        }
        // 3. Verificação de campos vazios
        const camposObrigatorios = ["primeiroNome", "ultimoNome", "email", "celular", "mensagem"]
        const camposVazios = camposObrigatorios.filter((campo) => !formData[campo].trim())

        if (camposVazios.length > 0) {
            const erros = { celular: "", camposObrigatorios: true }
            camposVazios.forEach((campo) => {
            erros[campo] = true
            })
            setFormErrors(erros)
            return
        }
        // Se Tudo válido
        setFormErrors({celular: "", camposObrigatorios: false})

        try {
            const response = await fetch("http://localhost:3000/enviar-email", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            alert("Mensagem enviada com sucesso ;)")
            setFormData({
                primeiroNome: "",
                ultimoNome: "",
                email: "",
                celular: "",
                mensagem: "",
            })
        } else {
            alert("Erro ao enviar sua mensagem :(")
        }
        } catch (error) {
            alert("Erro ao se conectar com o servidor.")
        }
    }

    // Inicío do componente de Frontend
    return (
        <div id="contato" className="flex justify-center scroll-mt-18 items-center w-screen min-h-screen bg-white">
            <div className="container mx-auto my-4 px-4 lg:px-20">

                {/* Região de campos */}
                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-4xl">
                        Entre em contato <br /> com a gente
                        </h1>
                    </div>
                    
                    {/* Caixas de inputs*/}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                        name="primeiroNome"
                        value={formData.primeiroNome}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                            formErrors.primeiroNome ? "bg-red-100 border border-red-400" : "bg-gray-100 text-gray-900"
                        }`}              
                        type="text"
                        placeholder="Primeiro nome*"
                        />
                        <input
                        name="ultimoNome"
                        value={formData.ultimoNome}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                            formErrors.ultimoNome ? "bg-red-100 border border-red-400" : "bg-gray-100 text-gray-900"
                        }`}               
                        type="text"
                        placeholder="Último nome*"
                        />
                        <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                            formErrors.email ? "bg-red-100 border border-red-400" : "bg-gray-100 text-gray-900"
                        }`}               
                        type="email"
                        placeholder="Email*"
                        />
                        <input
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                            formErrors.celular || formErrors.celular === true ? "bg-red-100 border border-red-400" : "bg-gray-100 text-gray-900"
                        }`}               
                        type="text"
                        placeholder="Celular*"
                        />
                    </div>

                    {/* Area de texto */}
                    <div className="my-4">
                        <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Mensagem*"
                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                            formErrors.mensagem ? "bg-red-100 border border-red-400" : "bg-gray-100 text-gray-900"
                        }`}              
                        ></textarea>
                        {/* Alerta de erro de preenchimento */}
                        <div className="mt-2">
                            {formErrors.email && typeof formErrors.email === "string" ? (
                            <p className="text-red-600 text-sm">Email inválido *</p>
                            ) : formErrors.celular && typeof formErrors.celular === "string" ? (
                            <p className="text-red-600 text-sm">Formato de número inválido *</p>
                            ) : formErrors.camposObrigatorios ? (
                            <p className="text-red-600 text-sm">Por favor preencher todos os campos obrigatórios *</p>
                            ) : null}
                        </div>
                    </div>

                    {/* Botão de enviar mensagem */}
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button onClick={handleSubmit} className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Enviar mensagem
                        </button>
                    </div>
                </div>

                {/* Região de Informações adicionais */}
                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-4xl my-4">
                            Converse com a gente
                        </h1>
                        <p className="text-gray-400">
                            Você pode nos enviar uma mensagem pela caixa ao lado, por email, 
                            ou por uma de nossas redes sociais linkadas abaixo
                        </p>

                        {/* Ícones */}
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col pt-2 pr-2">
                                <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">
                                    Endereço
                                </h2>
                                <p className="text-gray-400">
                                    Universidade Federal de Sergipe, Dcomp
                                </p>
                            </div>
                        </div>
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col pt-2 pr-2">
                                <i className="fas fa-envelope" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">
                                    Email
                                </h2>
                                <p className="text-gray-400">
                                    liga.ia.ufs@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Redes sociais */}
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <a
                                href="https://www.instagram.com/laia.ufs/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                            >
                                <i className="fab fa-instagram text-blue-900" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/liga-acadêmica-de-inteligência-artificial/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                            >
                                <i className="fab fa-linkedin-in text-blue-900" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact