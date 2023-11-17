import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ButtonMidtrans({ totalPayment }) {
  const navigate = useNavigate();
  async function handlePayment() {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://shifashionid.syifasrh.my.id/payment/midtrans/token",
        data: { totalPayment },
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });

      window.snap.pay(`${data.transaction_token}`, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
          navigate("/");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="flex items-center justify-center rounded-md border border-transparent bg-pink-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-600 w-full"
        onClick={handlePayment}
      >
        Checkout
      </button>
    </>
  );
}
