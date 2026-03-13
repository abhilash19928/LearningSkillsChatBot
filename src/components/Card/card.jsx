export default function Card({ classNameName = "", children }) {
  return (
  <div className={`card shadow p-1 mb-5 bg-body-tertiary rounded ${classNameName}`}>
    <div className="card-body">
    {children}
    </div>
  </div>
        
  );
}