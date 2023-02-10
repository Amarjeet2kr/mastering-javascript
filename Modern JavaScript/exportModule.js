var company = "OSlash";

const getCompany = () => {
    return company.toUpperCase();
}

const setComany = (newValue) => {
    company = newValue;
}

export {company, getCompany, setComany};