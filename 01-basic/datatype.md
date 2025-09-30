# 🌐 JavaScript Data Types  

JavaScript ek **dynamically typed language** hai 👉 iska matlab variables ke type run-time par decide hote hain.  

Data Types do categories me divide hote hain:  

- 🟢 **Primitive (7 types)**  
- 🔵 **Non-Primitive (3 types)**  

---

## 🟢 Primitive Types  

Primitive data types **immutable** hote hain aur **value** ke through store hote hain.  

### ✨ List of 7 Primitive Types:  

1. **📌 String** – Textual data  
   ```js
   let name = "Shahid";
   ```

2. **📌 Number** – Integers & floating-point numbers  
   ```js
   let age = 25;
   let price = 99.99;
   ```

3. **📌 Boolean** – `true` or `false`  
   ```js
   let isLoggedIn = true;
   ```

4. **📌 Null** – Intentional absence of value  
   ```js
   let data = null;
   ```

5. **📌 Undefined** – Declared variable but no value assigned  
   ```js
   let x;
   console.log(x); // undefined
   ```

6. **📌 BigInt** – Large integers beyond `Number` limit  
   ```js
   let big = **12345678901234567890n**;
   ```

7. **📌 Symbol** – Unique identifiers  
   ```js
   let sym = Symbol("id");
   ```

---

## 🔵 Non-Primitive Types  

Non-primitive data types **mutable** hote hain aur **reference** ke through store hote hain.  

### ✨ List of 3 Non-Primitive Types:  

1. **📌 Object** – Key-value pairs  
   ```js
   let person = { name: "Shahid", age: 21 };
   ```

2. **📌 Array** – Ordered list of values  
   ```js
   let fruits = ["Apple", "Mango", "Banana"];
   ```

3. **📌 Function** – Block of reusable code  
   ```js
   function greet() {
     return "Hello World";
   }
   ```

---

## ⚖️ Primitive vs Non-Primitive  

| Feature              | 🟢 Primitive                        | 🔵 Non-Primitive               |
|----------------------|-------------------------------------|--------------------------------|
| **Types**           | 7 (String, Number, Boolean, etc.)   | 3 (Object, Array, Function)    |
| **Stored by**       | Value                               | Reference                      |
| **Mutable**         | ❌ Immutable                        | ✅ Mutable                      |
| **Example**         | `let x = 10;`                       | `let obj = {a:1};`             |

---

## 📌 Visual Diagram  

```
JavaScript Data Types
│
├── 🟢 Primitive (7)
│   ├── String
│   ├── Number
│   ├── Boolean
│   ├── Null
│   ├── Undefined
│   ├── BigInt
│   └── Symbol
│
└── 🔵 Non-Primitive (3)
    ├── Object
    ├── Array
    └── Function
```

---

## ✅ Summary  

- **Primitive (7 types):**  
  `String`, `Number`, `Boolean`, `Null`, `Undefined`, `BigInt`, `Symbol`  

- **Non-Primitive (3 types):**  
  `Object`, `Array`, `Function`  