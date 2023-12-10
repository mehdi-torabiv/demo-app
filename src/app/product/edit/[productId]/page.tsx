"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import productsApi from "@/api/productsApi";
import SwiperComponent from "@/components/SwiperComponent";
import Link from "next/link";
import Button from "@/stories/Button/Button";
import Loading from "@/stories/Loading/Loading";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import FormField from "@/stories/FormField/FormField";
import Input from "@/stories/Input/Input";
import { Product } from "@/utils/interfaces";

interface FormData {
  title: string;
  description: string;
  stock: number;
  price: number;
}

function ProductEdit() {
  const router = useRouter();
  const params = useParams();
  const productId = Array.isArray(params.productId)
    ? params.productId[0]
    : params.productId;

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    stock: 0,
    price: 0,
  });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [mutationLoading, setMutationLoading] = useState<boolean>(false);

  const deleteMutation = useMutation({
    mutationFn: (productId: string) => {
      return productsApi.deleteProduct(productId);
    },
    onMutate: () => {
      setMutationLoading(true);
    },
    onSuccess: () => {
      toast.success("Product deleted successfully!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setMutationLoading(false);
    },
    onError: (error) => {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setMutationLoading(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      productId,
      updatedData,
    }: {
      productId: string;
      updatedData: Product;
    }) => {
      return productsApi.updateProduct(productId, updatedData);
    },
    onMutate: () => {
      setMutationLoading(true);
    },
    onSuccess: () => {
      toast.success("Product updated successfully!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setMutationLoading(false);
      router.push("/");
    },
    onError: (error) => {
      toast.success("Product updated successfully!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setMutationLoading(false);
      router.push("/");
    },
  });

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsApi.getProduct(productId),
    enabled: !!productId,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        stock: product.stock || 0,
        price: product.price || 0,
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (isLoading || mutationLoading) {
    return <Loading />;
  }

  const handleDeleteProduct = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteProduct = () => {
    deleteMutation.mutate(product.id);
    setDeleteModalOpen(false);
  };

  const handleSubmit = () => {
    updateMutation.mutate({
      productId: product.id,
      updatedData: { ...formData, ...product },
    });
  };

  return (
    <div className="container mx-auto p-3 md:p-0">
      <div className="flex flex-col p-4 md:flex-row border border-gray-100 justify-between md:p-8 shadow-sm mt-12 rounded-md md:space-x-5">
        <div className="md:w-2/5">
          <Link
            href={`/product/${product.id}`}
            className="text-gray-400 hover:text-black ease-in-out transition"
          >{`< Go Back`}</Link>
          <SwiperComponent slides={product.images} />
        </div>
        <div className="md:w-3/5 space-y-3 md:space-y-8 relative">
          <form className="space-y-3 pb-4 md:pb-0">
            <FormField label="Title" name="title">
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Description" name="description">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </FormField>
            <FormField label="Number in stock" name="stock">
              <Input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Price" name="price">
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </FormField>
          </form>
          <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between md:space-x-3 md:p-3 md:absolute md:bottom-0">
            <Button className="w-full bg-orange-400" onClick={handleSubmit}>
              Update Product
            </Button>
            <Button
              className="w-full bg-red-500"
              onClick={() => handleDeleteProduct()}
            >
              Delete Product
            </Button>
          </div>
        </div>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg text-center">
            <p className="text-lg font-semibold">Confirm Deletion</p>
            <p className="text-gray-700 my-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-red-500"
                onClick={() => confirmDeleteProduct()}
              >
                Confirm
              </Button>
              <Button
                className="bg-gray-400"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductEdit;
