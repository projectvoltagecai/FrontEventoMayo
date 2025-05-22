import '../assets/css/FloatingInput.css'; // Assuming you have a CSS file for styles

const FloatingInput = ({ value, name,id, label, type = 'text', f}) => {
  return (
    <div className="form-group">
      <input onChange ={f} value={value} name={name} id={id} type={type} required placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FloatingInput;