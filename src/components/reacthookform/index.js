import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>Address:</label>
          <select {...register('address', { required: true })}>
            <option value="">Select Address</option>
            <option value="Address 1">Address 1</option>
            <option value="Address 2">Address 2</option>
            <option value="Address 3">Address 3</option>
          </select>
          {errors.address && <span>This field is required</span>}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register('veg')}
            />
            Veg
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register('nonVeg')}
            />
            Non-Veg
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register('egg')}
            />
            Egg
          </label>
        </div>
        <button type="submit">Add Details</button>
      </form>
      <div>
        <h2>Submitted Details:</h2>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ReactHookForm;
