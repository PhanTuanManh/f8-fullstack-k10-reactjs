import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { createNew, updateProduct, getOne } from "../../axios";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const productSchema = z.object({
  title: z.string().min(4, { message: "Tieu de phai lon hon 4 ky tu" }),
  price: z.number().positive({ message: "Gia phai lon hon 0" }),
  description: z
    .string()
    .min(6, { message: "Mo ta phai lon hon 6 ky tu" })
    .optional(),
  // .min(6, { message: "Mo ta phai lon hon 6 ky tu" }),
});

const ProductForm = () => {
  const nav = useNavigate();
  const id = useParams().id;
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await getOne("/products", id);
        reset(data);
      })();
    }
  }, [id]);

  console.log(product);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
    values: product,
  });

  const onSubmit = async (product) => {
    if (id) {
      await updateProduct("/products", id, product);
      if (window.confirm("Sửa sản phẩm thành công")) {
        nav("/admin/products");
      } else {
        reset();
      }
    } else {
      product.id = uuid();
      await createNew("/products", product);
      if (window.confirm("Thêm sản phẩm thành công")) {
        nav("/admin/products");
      } else {
        reset();
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl py-2 mb-2">Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-white border">
        <div className="form-group mb-2">
          <label htmlFor="title">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title?.message && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div className="form-group mb-2">
          <label htmlFor="price">Giá sản phẩm</label>
          <input
            className="form-control"
            type="number"
            name="price"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price?.message && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description">Mô tả</label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description?.message && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </div>
        <div className="form-group mb-2">
          <button type="submit" className="btn btn-primary">
            {id ? "Sửa" : "Thêm"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
