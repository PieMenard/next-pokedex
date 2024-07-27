const CreateAbilityForm = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <h1 className="font-bold text-2xl">Create a New Ability</h1>
      <form className="flex items-center gap-3">
        <label htmlFor="title">Ability Id</label>
        <input type="text" className="rounded-sm border border-gray-600" />
      </form>
      <form className="flex items-center gap-3">
        <label htmlFor="title">Ability Name</label>
        <input type="text" className="rounded-sm border border-gray-600" />
      </form>
    </div>
  );
};

export default CreateAbilityForm;
