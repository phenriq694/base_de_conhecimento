# yup

1. Install:
```
yarn add yup
``` 
2. Import in the component that needs input validation:
```javascript
import * as Yup from 'yup';
``` 
3. Create a schema with the input data that needs validation:
```javascript
const schema = Yup.object().shape({
  email: Yup.string().email('Inserta a valid email').required('Required'),
  password: Yup.string().required('Required'), 
});
```
4. Add this schema in the component that contain the input fields:
```javascript
return (
  <Form schema={schema} onSubmit={handleSubmit}>
    <Input name="name" placeholder="Full Name" />
    <Input name="email" type="email" placeholder="Your email address" />
    <Input
      name="password"
      type="password"
      placeholder="Your secret password"
    />
  </Form>
)
``` 

## Sources:
Rockseat GoStack - Module GoBarber Web - Validations