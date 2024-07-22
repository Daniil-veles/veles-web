const createFormFields = (formSchema: OrganizationType) => {
    const schema = formSchema; // Создаем схему для указанного типа организации
  
    // Фильтруем поля формы на основе наличия их в схеме
    const formFields = fields.filter(
      (field) => schema.shape[field.name] !== undefined
    );
  
    return formFields;
  };