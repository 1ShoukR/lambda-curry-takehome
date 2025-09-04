import { defineWidgetConfig } from "@medusajs/admin-sdk"

const OrderLineItemCustomizationWidget = ({ data }: any) => {
  const customizedItems = data?.items?.filter((item: any) => 
    item.metadata && item.metadata.custom_message
  )

  if (customizedItems.length === 0) {
    return null
  }

  return (
    <div style={{ 
      backgroundColor: '#212124', 
      borderRadius: '8px', 
      padding: '24px', 
      border: '1px solid #374151',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ 
        fontSize: '18px', 
        fontWeight: '500', 
        color: '#f3f4f6', 
        marginBottom: '16px',
        margin: '0 0 16px 0'
      }}>
        Product Customizations
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {customizedItems.map((item: any) => (
          <div key={item.id} style={{ 
            border: '1px solid #4b5563', 
            borderRadius: '6px', 
            padding: '16px', 
            backgroundColor: '#1a1a1d' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontWeight: '500', color: '#f3f4f6', margin: '0' }}>{item.product_title}</h4>
                <p style={{ fontSize: '14px', color: '#9ca3af', margin: '4px 0 0 0' }}>{item.variant_title}</p>
              </div>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Qty: {item.quantity}</span>
            </div>
            <div style={{ 
              marginTop: '12px', 
              padding: '12px', 
              backgroundColor: '#1e3a8a', 
              border: '1px solid #3b82f6', 
              borderRadius: '6px' 
            }}>
              <p style={{ fontSize: '14px', fontWeight: '500', color: '#bfdbfe', margin: '0' }}>Custom Message:</p>
              <p style={{ 
                fontSize: '14px', 
                color: '#dbeafe', 
                fontStyle: 'italic', 
                marginTop: '4px',
                margin: '4px 0 0 0'
              }}>
                "{item.metadata.custom_message}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "order.details.after",
})

export default OrderLineItemCustomizationWidget
