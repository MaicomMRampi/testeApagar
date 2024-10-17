import * as Yup from "yup"
import { parseDate, getLocalTimeZone, today, parseZonedDateTime } from "@internationalized/date";

const initialValues = {
    nome: '',
    quantidade: '',
    instituicao: '',
    valorPago: '',
    dataCompra: today(getLocalTimeZone()),
};

// ... (Função Label - Se necessário) 

const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Patrimônio é obrigatório'),
    instituicao: Yup.string().required('Tipo é obrigatório'),
    quantidade: Yup.string().required('Tipo é obrigatório'),
    valorPago: Yup.string().required('Valor é obrigatório'),
    dataCompra: Yup.date().required('Data é obrigatório'),
});

export { initialValues, validationSchema }