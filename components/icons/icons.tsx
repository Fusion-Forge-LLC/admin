export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
    dashboard: ({ stroke, ...props}: IconProps) =>(
        <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M18.3333 7.0974V3.31406C18.3333 2.13906 17.8 1.66406 16.475 1.66406H13.1083C11.7833 1.66406 11.25 2.13906 11.25 3.31406V7.08906C11.25 8.2724 11.7833 8.73906 13.1083 8.73906H16.475C17.8 8.7474 18.3333 8.2724 18.3333 7.0974Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M8.7513 7.0974V3.31406C8.7513 2.13906 8.21797 1.66406 6.89297 1.66406H3.5263C2.2013 1.66406 1.66797 2.13906 1.66797 3.31406V7.08906C1.66797 8.2724 2.2013 8.73906 3.5263 8.73906H6.89297C8.21797 8.7474 8.7513 8.2724 8.7513 7.0974Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M8.7513 16.475V13.1083C8.7513 11.7833 8.21797 11.25 6.89297 11.25H3.5263C2.2013 11.25 1.66797 11.7833 1.66797 13.1083V16.475C1.66797 17.8 2.2013 18.3333 3.5263 18.3333H6.89297C8.21797 18.3333 8.7513 17.8 8.7513 16.475Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    users: ({stroke, ...props}: IconProps) => (
        <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M17.3117 15C17.9361 15 18.4328 14.6071 18.8787 14.0576C19.7916 12.9328 18.2927 12.034 17.7211 11.5938C17.14 11.1463 16.4912 10.8928 15.8333 10.8333M15 9.16667C16.1506 9.16667 17.0833 8.23392 17.0833 7.08333C17.0833 5.93274 16.1506 5 15 5" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
            <path 
                d="M2.687 15C2.06258 15 1.56593 14.6071 1.11998 14.0576C0.207107 12.9328 1.70593 12.034 2.27757 11.5938C2.85868 11.1463 3.50752 10.8928 4.16537 10.8333M4.58203 9.16667C3.43144 9.16667 2.4987 8.23392 2.4987 7.08333C2.4987 5.93274 3.43144 5 4.58203 5" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
            <path 
                d="M6.7352 12.5901C5.88372 13.1166 3.65118 14.1916 5.01095 15.5369C5.67518 16.1941 6.41497 16.6641 7.34505 16.6641H12.6524C13.5825 16.6641 14.3222 16.1941 14.9865 15.5369C16.3462 14.1916 14.1137 13.1166 13.2622 12.5901C11.2655 11.3554 8.73188 11.3554 6.7352 12.5901Z"
                stroke={stroke}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M12.9154 6.2526C12.9154 7.86344 11.6095 9.16927 9.99871 9.16927C8.38788 9.16927 7.08203 7.86344 7.08203 6.2526C7.08203 4.64177 8.38788 3.33594 9.99871 3.33594C11.6095 3.33594 12.9154 4.64177 12.9154 6.2526Z"
                stroke={stroke}
                strokeWidth="1.5"
            />
        </svg>
    ),

    building: ({stroke, ...props}: IconProps) => (
        <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M10.8346 18.3307H4.16797C2.5013 18.3307 1.66797 17.4974 1.66797 15.8307V9.16406C1.66797 7.4974 2.5013 6.66406 4.16797 6.66406H8.33463V15.8307C8.33463 17.4974 9.16797 18.3307 10.8346 18.3307Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M8.42629 3.33594C8.35962 3.58594 8.33464 3.86094 8.33464 4.16927V6.66927H4.16797V5.0026C4.16797 4.08594 4.91797 3.33594 5.83464 3.33594H8.42629Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M11.668 6.66406V10.8307" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M15 6.66406V10.8307" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M14.168 14.1641H12.5013C12.043 14.1641 11.668 14.5391 11.668 14.9974V18.3307H15.0013V14.9974C15.0013 14.5391 14.6263 14.1641 14.168 14.1641Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M5 10.8359V14.1693" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M8.33203 15.8307V4.16406C8.33203 2.4974 9.16536 1.66406 10.832 1.66406H15.832C17.4987 1.66406 18.332 2.4974 18.332 4.16406V15.8307C18.332 17.4974 17.4987 18.3307 15.832 18.3307H10.832C9.16536 18.3307 8.33203 17.4974 8.33203 15.8307Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    message: ({stroke, ...props}: IconProps) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
            <path d="M7.08464 15.8307H6.66797C3.33464 15.8307 1.66797 14.9974 1.66797 10.8307V6.66406C1.66797 3.33073 3.33464 1.66406 6.66797 1.66406H13.3346C16.668 1.66406 18.3346 3.33073 18.3346 6.66406V10.8307C18.3346 14.1641 16.668 15.8307 13.3346 15.8307H12.918C12.6596 15.8307 12.4096 15.9557 12.2513 16.1641L11.0013 17.8307C10.4513 18.5641 9.5513 18.5641 9.0013 17.8307L7.7513 16.1641C7.61797 15.9807 7.30964 15.8307 7.08464 15.8307Z" 
                stroke={stroke}
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M13.3301 9.16667H13.3375" 
                stroke={stroke}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M9.99803 9.16667H10.0055" 
                stroke={stroke}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M6.66209 9.16667H6.66957" 
                stroke={stroke}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    invoice: ({stroke, ...props}: IconProps) => (
        <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33203 15.5356V6.70928C3.33203 4.33094 3.33203 3.14177 4.06426 2.40292C4.7965 1.66406 5.97501 1.66406 8.33203 1.66406H11.6654C14.0224 1.66406 15.2009 1.66406 15.9331 2.40292C16.6654 3.14177 16.6654 4.33094 16.6654 6.70928V15.5356C16.6654 16.7953 16.6654 17.4251 16.2804 17.6731C15.6513 18.0783 14.6788 17.2286 14.1896 16.9201C13.7854 16.6652 13.5834 16.5378 13.3591 16.5305C13.1168 16.5225 12.9111 16.6447 12.4744 16.9201L10.882 17.9244C10.4524 18.1952 10.2377 18.3307 9.9987 18.3307C9.7597 18.3307 9.54495 18.1952 9.11536 17.9244L7.52297 16.9201C7.11882 16.6652 6.91675 16.5378 6.69247 16.5305C6.45013 16.5225 6.24447 16.6447 5.80776 16.9201C5.31866 17.2286 4.34609 18.0783 3.71699 17.6731C3.33203 17.4251 3.33203 16.7953 3.33203 15.5356Z"
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M9.16797 9.16406H6.66797" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M11.668 5.83594H6.66797" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    analytics: ({stroke, ...props}: IconProps) => (
        <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M1.66797 18.3359H18.3346" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M8.125 3.33073V18.3307H11.875V3.33073C11.875 2.41406 11.5 1.66406 10.375 1.66406H9.625C8.5 1.66406 8.125 2.41406 8.125 3.33073Z" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M2.5 8.33073V18.3307H5.83333V8.33073C5.83333 7.41406 5.5 6.66406 4.5 6.66406H3.83333C2.83333 6.66406 2.5 7.41406 2.5 8.33073Z" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M14.168 12.5026V18.3359H17.5013V12.5026C17.5013 11.5859 17.168 10.8359 16.168 10.8359H15.5013C14.5013 10.8359 14.168 11.5859 14.168 12.5026Z" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    bell: ({stroke, ...props}: IconProps) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
            <path 
                d="M10.0175 2.42188C7.25914 2.42188 5.01747 4.66354 5.01747 7.42187V9.83021C5.01747 10.3385 4.80081 11.1135 4.54247 11.5469L3.58414 13.1385C2.99247 14.1219 3.40081 15.2135 4.48414 15.5802C8.07581 16.7802 11.9508 16.7802 15.5425 15.5802C16.5508 15.2469 16.9925 14.0552 16.4425 13.1385L15.4841 11.5469C15.2341 11.1135 15.0175 10.3385 15.0175 9.83021V7.42187C15.0175 4.67187 12.7675 2.42188 10.0175 2.42188Z" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round"
            />
            <path 
                d="M11.5599 2.66719C11.3016 2.59219 11.0349 2.53385 10.7599 2.50052C9.9599 2.40052 9.19323 2.45885 8.47656 2.66719C8.71823 2.05052 9.31823 1.61719 10.0182 1.61719C10.7182 1.61719 11.3182 2.05052 11.5599 2.66719Z" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeMiterlimit="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M12.5156 15.8828C12.5156 17.2578 11.3906 18.3828 10.0156 18.3828C9.33229 18.3828 8.69896 18.0995 8.24896 17.6495C7.79896 17.1995 7.51562 16.5661 7.51562 15.8828" 
                stroke={stroke} 
                strokeWidth="1.5" 
                strokeMiterlimit="10"
            />
        </svg>
    ),

    password: (props: IconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M14.8425 11.1977C13.2975 12.7352 11.085 13.2077 9.14249 12.6002L5.60999 16.1252C5.35499 16.3877 4.85249 16.5452 4.49249 16.4927L2.85749 16.2677C2.31749 16.1927 1.81499 15.6827 1.73249 15.1427L1.50749 13.5077C1.45499 13.1477 1.62749 12.6452 1.87499 12.3902L5.39999 8.86523C4.79999 6.91523 5.26499 4.70273 6.80999 3.16523C9.02249 0.952734 12.615 0.952734 14.835 3.16523C17.055 5.37773 17.055 8.98523 14.8425 11.1977Z"
            stroke="#232324"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.16748 13.1172L6.89248 14.8422"
            stroke="#232324"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.875 8.25C11.4963 8.25 12 7.74632 12 7.125C12 6.50368 11.4963 6 10.875 6C10.2537 6 9.75 6.50368 9.75 7.125C9.75 7.74632 10.2537 8.25 10.875 8.25Z"
            stroke="#232324"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
    ),

    logout: (props: IconProps) => (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.08 10.965L15 9.045L13.08 7.125"
            stroke="#FF0000"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.31995 9.04492H14.9474"
            stroke="#FF0000"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.81995 15C5.50495 15 2.81995 12.75 2.81995 9C2.81995 5.25 5.50495 3 8.81995 3"
            stroke="#FF0000"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),

      calendar: (props: IconProps) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M8 2V5" stroke="#707070" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V5" stroke="#707070" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 9.09375H20.5" stroke="#707070" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#707070" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6937 13.7031H15.7027" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6937 16.7031H15.7027" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9945 13.7031H12.0035" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9945 16.7031H12.0035" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.29529 13.7031H8.30427" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.29529 16.7031H8.30427" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    claretUp: (props: IconProps) => (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.00109 8.00281H3.22109C1.01442 8.00281 0.107755 6.43615 1.21442 4.52281L2.10775 2.98281L3.00109 1.44281C4.10775 -0.470521 5.91442 -0.470521 7.02109 1.44281L7.91442 2.98281L8.80775 4.52281C9.91442 6.43615 9.00775 8.00281 6.80109 8.00281H5.00109Z" fill="#21C55D"/>
        </svg>
    ),

    claretDown: (props: IconProps) => (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.00166 0H6.78166C8.98833 0 9.89499 1.56667 8.78833 3.48L7.89499 5.02L7.00166 6.56C5.89499 8.47333 4.08833 8.47333 2.98166 6.56L2.08833 5.02L1.19499 3.48C0.108328 1.56667 1.00833 0 3.22166 0H5.00166Z" fill="#EF4444"/>
        </svg>   
    ),

    receiptAdd: (props: IconProps) => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.5 4.5V6.315C16.5 7.5 15.75 8.25 14.565 8.25H12V3.0075C12 2.175 12.6825 1.5 13.515 1.5C14.3325 1.5075 15.0825 1.8375 15.6225 2.3775C16.1625 2.925 16.5 3.675 16.5 4.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.5 5.25V15.75C1.5 16.3725 2.205 16.725 2.7 16.35L3.9825 15.39C4.2825 15.165 4.7025 15.195 4.9725 15.465L6.21749 16.7175C6.50999 17.01 6.99001 17.01 7.28251 16.7175L8.5425 15.4575C8.805 15.195 9.225 15.165 9.5175 15.39L10.8 16.35C11.295 16.7175 12 16.365 12 15.75V3C12 2.175 12.675 1.5 13.5 1.5H5.25H4.5C2.25 1.5 1.5 2.8425 1.5 4.5V5.25Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.6875 7.5H8.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.75 9.5625V5.4375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    building2: (props: IconProps) => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.02501 13.5H3.11252C2.04002 13.5 1.5 12.96 1.5 11.8875V3.11252C1.5 2.04002 2.04002 1.5 3.11252 1.5H6.33751C7.41001 1.5 7.94998 2.04002 7.94998 3.11252V4.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.0259 6.31499V14.685C13.0259 15.8925 12.4259 16.5 11.2184 16.5H6.83842C5.63092 16.5 5.02344 15.8925 5.02344 14.685V6.31499C5.02344 5.10749 5.63092 4.5 6.83842 4.5H11.2184C12.4259 4.5 13.0259 5.10749 13.0259 6.31499Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.0508 4.5V3.11252C10.0508 2.04002 10.5908 1.5 11.6633 1.5H14.8882C15.9607 1.5 16.5008 2.04002 16.5008 3.11252V11.8875C16.5008 12.96 15.9607 13.5 14.8882 13.5H13.0283" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 8.25H10.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 10.5H10.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 16.5V14.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    receive: (props: IconProps) => (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.16797 11.75H2.5013C2.04107 11.75 1.66797 12.1231 1.66797 12.5833V18C1.66797 18.4603 2.04107 18.8333 2.5013 18.8333H4.16797C4.6282 18.8333 5.0013 18.4603 5.0013 18V12.5833C5.0013 12.1231 4.6282 11.75 4.16797 11.75Z" stroke="#205BF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12.5859H9.79167C10.367 12.5859 10.8333 13.0523 10.8333 13.6276C10.8333 14.2029 10.367 14.6693 9.79167 14.6693H7.91667" stroke="#205BF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.16667 14.6639H12.2431C12.9514 14.6639 13.6414 14.4382 14.2128 14.0196L16.403 12.4153C16.8791 12.0461 17.5565 12.0881 17.983 12.5134C18.4778 13.0067 18.444 13.8164 17.9098 14.2671L14.2459 17.2492C13.6514 17.7331 12.9083 17.9972 12.1417 17.9972H5" stroke="#205BF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.8333 6.33073C15.8333 8.63184 13.9678 10.4974 11.6667 10.4974C9.3655 10.4974 7.5 8.63184 7.5 6.33073C7.5 4.02954 9.3655 2.16406 11.6667 2.16406C13.9678 2.16406 15.8333 4.02954 15.8333 6.33073Z" stroke="#205BF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    arrowUp: (props: IconProps) => (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.03484 5.285L5.99984 2.25L2.96484 5.285" stroke="#21C55D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 10.7509V2.33594" stroke="#21C55D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    arrowDown: (props: IconProps) => (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.03484 7.71875L5.99984 10.7537L2.96484 7.71875" stroke="#C52121" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 2.25V10.665" stroke="#C52121" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    ),

    moneyAdd: (props: IconProps) => (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18.3346 9.66667C18.3346 6.71877 18.3346 5.24481 17.4573 4.26075C17.317 4.10336 17.1623 3.95779 16.9951 3.82572C15.9496 3 14.3835 3 11.2513 3H8.7513C5.61915 3 4.05308 3 3.00752 3.82572C2.84029 3.95779 2.68563 4.10336 2.5453 4.26075C1.66797 5.24481 1.66797 6.71877 1.66797 9.66667C1.66797 12.6146 1.66797 14.0885 2.5453 15.0726C2.68563 15.23 2.84029 15.3755 3.00752 15.5076C4.05308 16.3333 5.61915 16.3333 8.7513 16.3333H10.0013" stroke="#21C55D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.4167 17.9974V12.1641M12.5 15.0807H18.3333" stroke="#21C55D" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4.58095 9.66406H4.57422" stroke="#21C55D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0846 9.66927C12.0846 10.8199 11.1519 11.7526 10.0013 11.7526C8.85072 11.7526 7.91797 10.8199 7.91797 9.66927C7.91797 8.51868 8.85072 7.58594 10.0013 7.58594C11.1519 7.58594 12.0846 8.51868 12.0846 9.66927Z" stroke="#21C55D" strokeWidth="1.5"/>
        </svg>
    ),

    moneyMinus: (props: IconProps) => (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M10.0013 17.1693H8.7513C5.61915 17.1693 4.05308 17.1693 3.00752 16.3435C2.84029 16.2114 2.68563 16.0659 2.5453 15.9085C1.66797 14.9244 1.66797 13.4505 1.66797 10.5026C1.66797 7.5547 1.66797 6.08075 2.5453 5.09669C2.68563 4.9393 2.84029 4.79373 3.00752 4.66166C4.05308 3.83594 5.61915 3.83594 8.7513 3.83594H11.2513C14.3835 3.83594 15.9496 3.83594 16.9951 4.66166C17.1623 4.79373 17.317 4.9393 17.4573 5.09669C18.3346 6.08075 18.3346 7.5547 18.3346 10.5026V13.0026" stroke="#C52121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 15.9141H18.3333" stroke="#C52121" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4.58028 10.5H4.57422" stroke="#C52121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.4162 10.5H15.4102" stroke="#C52121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0846 10.4974C12.0846 11.648 11.1519 12.5807 10.0013 12.5807C8.85072 12.5807 7.91797 11.648 7.91797 10.4974C7.91797 9.34681 8.85072 8.41406 10.0013 8.41406C11.1519 8.41406 12.0846 9.34681 12.0846 10.4974Z" stroke="#C52121" strokeWidth="1.5"/>
        </svg>
    )
}