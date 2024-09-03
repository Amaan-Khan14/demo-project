import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    phone_number: "",
    address_line1: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    nationality: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.date_of_birth)
      newErrors.date_of_birth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone number is required";
    if (!formData.address_line1)
      newErrors.address_line1 = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip_code) newErrors.zip_code = "ZIP code is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.emergency_contact_name)
      newErrors.emergency_contact_name = "Emergency contact name is required";
    if (!formData.emergency_contact_phone)
      newErrors.emergency_contact_phone = "Emergency contact phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    if (validateForm()) {
      try {
        const response = await axios.post("http://ec2-3-110-156-13.ap-south-1.compute.amazonaws.com:3000/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Form data submitted:", response.data);
        setSubmitSuccess(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError(
          error.response?.data?.message ||
            "An error occurred while submitting the form",
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.first_name && (
              <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.last_name && (
              <p className="mt-1 text-sm text-red-500">{errors.last_name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="date_of_birth"
              className="block text-sm font-medium text-gray-300"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.date_of_birth && (
              <p className="mt-1 text-sm text-red-500">
                {errors.date_of_birth}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-300"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.gender && (
              <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.phone_number && (
              <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="address_line1"
              className="block text-sm font-medium text-gray-300"
            >
              Address
            </label>
            <input
              type="text"
              id="address_line1"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.address_line1 && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address_line1}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-300"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-300"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-500">{errors.state}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="zip_code"
              className="block text-sm font-medium text-gray-300"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.zip_code && (
              <p className="mt-1 text-sm text-red-500">{errors.zip_code}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-300"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">{errors.country}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-300"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="emergency_contact_name"
              className="block text-sm font-medium text-gray-300"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              id="emergency_contact_name"
              name="emergency_contact_name"
              value={formData.emergency_contact_name}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.emergency_contact_name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.emergency_contact_name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="emergency_contact_phone"
              className="block text-sm font-medium text-gray-300"
            >
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              id="emergency_contact_phone"
              name="emergency_contact_phone"
              value={formData.emergency_contact_phone}
              onChange={handleInputChange}
              className="p-2 mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.emergency_contact_phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.emergency_contact_phone}
              </p>
            )}
          </div>
        </div>

        {submitError && (
          <div className="text-red-500">
            An error occurred while submitting the form: {submitError}
          </div>
        )}
        {submitSuccess && (
          <div className="text-green-500">Form submitted successfully!</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
