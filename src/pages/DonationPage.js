import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import DonationForm from "../components/DonationForm";
import ErrorToast from "../components/ErrorToast";
import Loading from "../components/Loading";
import { useAxiosGet } from "../hooks/useAxiosGet";

function DonationPage() {
  let params = useParams();

  const [totalPrice, setTotalPrice] = useState(0);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [alert, setAlert] = useState(false);


  const { data, error, loading } = useAxiosGet(
    `donation_category?id=${params.id}`
  );

  if (error) return <ErrorToast msg={error} />;

  if (loading) return <Loading />;

  const totalPriceChange = (value) => {
    setTotalPrice(value.target.value);
  };

  const donationMoney = async () => {
    const users = {
      fullName: fullName,
      email: email,
    };
    const response = await axios.post(`http://localhost:3000/users`, users);
    if(response.status === 201){
        const current = new Date();
    
        const donation = {
          user_email: email,
          total: Number(totalPrice),
          category_id: params.id,
          created_date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
        };
        const response = await axios.post(`http://localhost:3000/donations`, donation);
        if(response.status === 201){
            setAlert(true);
            setEmail(null);
            setFullName(null);
            setTotalPrice(0);
        }
    }
    
  };

  if (data) {
    return data.map((cateogry) => (
      <>
        <DonationCard
          key={cateogry.id}
          title={cateogry.title}
          description={cateogry.description}
        />
        <DonationForm
          totalPriceChange={totalPriceChange}
          totalPrice={totalPrice}
          donationMoney={donationMoney}
          setEmail={setEmail}
          setFullName={setFullName}
          email={email}
          fullName={fullName}
          alert={alert}
        />
      </>
    ));
  }
}

export default DonationPage;
