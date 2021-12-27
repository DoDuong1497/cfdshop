import React from 'react'

export const ArrowDown = ({size, color='#6A983C'})=>{
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.81348 6.53326L7.55348 9.27326C7.67838 9.39743 7.84735 9.46712 8.02348 9.46712C8.1996 9.46712 8.36857 9.39743 8.49348 9.27326L11.1601 6.6066" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>
    )
}

export const ArrowRight = ({size, color})=>{
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3333 27.9668L23.1833 21.1168C23.4937 20.8045 23.6679 20.3821 23.6679 19.9418C23.6679 19.5015 23.4937 19.079 23.1833 18.7668L16.5166 12.1001" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>
    )
}

export const ArrowLeft = ({size, color})=>{
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6664 12.0332L16.8164 18.8832C16.506 19.1955 16.3318 19.6179 16.3318 20.0582C16.3318 20.4985 16.506 20.9209 16.8164 21.2332L23.4831 27.8999" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>          
    )
}

export const BrandName = () => {
    return (
        <svg width="177" height="50" viewBox="0 0 177 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.87168 26.7609H10.4051V23.2391H3.87168V19.5217H11.857V16H0V33.6087H3.87168V26.7609Z" fill="#151515"/>
        <path d="M13.1832 27.0054V33.6087H16.8129V27.0054C16.8129 24.9755 18.4342 23.337 20.4426 23.337V20.0109H19.9586C15.9418 20.0109 13.1832 23.1413 13.1832 27.0054Z" fill="#151515"/>
        <path d="M28.5574 20.0109C24.5406 20.0109 21.298 23.1413 21.298 27.0054C21.298 30.8696 24.5406 34 28.5574 34C31.7516 34 34.4618 32.019 35.4297 29.2554H31.4128C30.7595 30.1114 29.7189 30.6739 28.5574 30.6739C26.9846 30.6739 25.6779 29.6712 25.1455 28.2772H35.6959C35.7685 27.8614 35.8169 27.4457 35.8169 27.0054C35.8169 23.1413 32.5743 20.0109 28.5574 20.0109ZM25.1455 25.7337C25.6779 24.3397 26.9846 23.337 28.5574 23.337C30.1061 23.337 31.437 24.3397 31.9694 25.7337H25.1455Z" fill="#151515"/>
        <path d="M43.7453 25.8315C42.3418 25.6603 40.7447 25.0489 40.7447 24.2663C40.7447 23.3859 41.4949 23.0924 42.2934 23.0924C43.0919 23.0924 43.8421 23.3859 43.8421 24.5109H47.4718C47.4718 21.6739 45.1004 20.0109 42.2934 20.0109C39.4864 20.0109 37.115 21.6739 37.115 24.3641C37.115 26.4429 39.559 28.0082 42.0998 28.3261C43.1887 28.4728 43.9873 29.0353 43.9873 29.6467C43.9873 30.5027 43.0919 30.9185 42.2934 30.9185C41.4949 30.9185 40.5995 30.625 40.5995 29.5H36.9698C36.9698 32.337 39.4864 34 42.2934 34C45.1004 34 47.617 32.337 47.617 29.5C47.617 27.2745 45.6569 26.0516 43.7453 25.8315Z" fill="#151515"/>
        <path d="M56.2821 20.0109C55.0722 20.0109 53.9833 20.4511 53.1364 21.1848V16H49.5067V33.6087H53.1364V26.981C53.1364 24.9755 54.2737 23.337 56.2821 23.337C58.2906 23.337 59.4279 24.9755 59.4279 27.0054V33.6087H63.0576V27.0054C63.0576 23.1413 60.299 20.0109 56.2821 20.0109Z" fill="#151515"/>
        <path d="M72.0175 20.0109C68.0006 20.0109 65.242 23.1413 65.242 27.0054V33.6087H68.8717V27.0054C68.8717 24.9755 70.009 23.337 72.0175 23.337C74.0259 23.337 75.1632 24.9755 75.1632 27.0054V33.6087H78.7929V27.0054C78.7929 23.1413 76.0343 20.0109 72.0175 20.0109Z" fill="#151515"/>
        <path d="M87.6346 20.0109C83.6178 20.0109 80.3752 23.1413 80.3752 27.0054C80.3752 30.8696 83.6178 34 87.6346 34C90.8288 34 93.539 32.019 94.5069 29.2554H90.49C89.8367 30.1114 88.7962 30.6739 87.6346 30.6739C86.0618 30.6739 84.7551 29.6712 84.2227 28.2772H94.7731C94.8457 27.8614 94.8941 27.4457 94.8941 27.0054C94.8941 23.1413 91.6515 20.0109 87.6346 20.0109ZM84.2227 25.7337C84.7551 24.3397 86.0618 23.337 87.6346 23.337C89.1833 23.337 90.5142 24.3397 91.0466 25.7337H84.2227Z" fill="#151515"/>
        <path d="M102.822 25.8315C101.419 25.6603 99.8219 25.0489 99.8219 24.2663C99.8219 23.3859 100.572 23.0924 101.371 23.0924C102.169 23.0924 102.919 23.3859 102.919 24.5109H106.549C106.549 21.6739 104.178 20.0109 101.371 20.0109C98.5636 20.0109 96.1922 21.6739 96.1922 24.3641C96.1922 26.4429 98.6362 28.0082 101.177 28.3261C102.266 28.4728 103.064 29.0353 103.064 29.6467C103.064 30.5027 102.169 30.9185 101.371 30.9185C100.572 30.9185 99.6768 30.625 99.6768 29.5H96.047C96.047 32.337 98.5636 34 101.371 34C104.178 34 106.694 32.337 106.694 29.5C106.694 27.2745 104.734 26.0516 102.822 25.8315Z" fill="#151515"/>
        <path d="M115.117 20.0109C111.1 20.0109 107.858 23.1413 107.858 27.0054C107.858 30.8696 111.1 34 115.117 34C118.311 34 121.022 32.019 121.99 29.2554H117.973C117.319 30.1114 116.279 30.6739 115.117 30.6739C113.544 30.6739 112.238 29.6712 111.705 28.2772H122.256C122.328 27.8614 122.377 27.4457 122.377 27.0054C122.377 23.1413 119.134 20.0109 115.117 20.0109ZM111.705 25.7337C112.238 24.3397 113.544 23.337 115.117 23.337C116.666 23.337 117.997 24.3397 118.529 25.7337H111.705Z" fill="#151515"/>
        <path d="M130.596 23.337C131.999 23.337 133.185 24.1196 133.814 25.2935H137.637C136.839 22.2609 133.983 20.0109 130.596 20.0109C126.579 20.0109 123.336 23.1413 123.336 27.0054C123.336 30.8696 126.579 34 130.596 34C133.959 34 136.766 31.7989 137.589 28.8152H133.693C133.088 29.9158 131.951 30.6739 130.596 30.6739C128.587 30.6739 126.966 29.0353 126.966 27.0054C126.966 24.9755 128.587 23.337 130.596 23.337Z" fill="#151515"/>
        <path d="M152.929 27.0054C152.929 23.1413 149.711 20.0109 145.718 20.0109C141.726 20.0109 138.507 23.1413 138.507 27.0054C138.507 30.8696 141.726 34 145.718 34C149.711 34 152.929 30.8696 152.929 27.0054ZM149.3 27.0054C149.3 29.0353 147.702 30.6739 145.718 30.6739C143.734 30.6739 142.137 29.0353 142.137 27.0054C142.137 24.9755 143.734 23.337 145.718 23.337C147.702 23.337 149.3 24.9755 149.3 27.0054Z" fill="#151515"/>
        <path d="M170.467 20.0109C168.579 20.0109 166.885 20.8668 165.748 22.2364C164.611 20.8668 162.917 20.0109 161.029 20.0109C157.012 20.0109 154.496 23.1413 154.496 27.0054V33.6087H158.126V27.0054C158.126 24.9755 159.021 23.337 161.029 23.337C163.038 23.337 163.933 24.9755 163.933 27.0054V33.6087H167.563V27.0054C167.563 24.9755 168.458 23.337 170.467 23.337C172.475 23.337 173.37 24.9755 173.37 27.0054V33.6087H177V27.0054C177 23.1413 174.483 20.0109 170.467 20.0109Z" fill="#151515"/>
        </svg>
    )
}

export const SelectIcon = ({size}) => {
    return(
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.9665 14.5002L21.1165 7.65018C20.8042 7.33976 20.3818 7.16553 19.9415 7.16553C19.5012 7.16553 19.0788 7.33976 18.7665 7.65018L12.0999 14.3168" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M12.0332 25.5L18.8832 32.35C19.1955 32.6604 19.6179 32.8347 20.0582 32.8347C20.4985 32.8347 20.9209 32.6604 21.2332 32.35L27.8999 25.6833" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    )
}

export const CloseIcon = ({size,color='#151515'}) => {
    return(
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5997 30.5999L9.39966 9.3999" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M30.5997 9.3999L9.39966 30.5999" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    )
}

export const HeartIcon = ({size,color='#151515'}) => {
    return(
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export const PictureRightIcon = ({size,color='#151515'}) => {
    return(
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 3.3335H9.16659C7.32564 3.3335 5.83325 4.82588 5.83325 6.66683V13.3335C5.83325 15.1744 7.32564 16.6668 9.16659 16.6668H15.8333C17.6742 16.6668 19.1666 15.1744 19.1666 13.3335V6.66683C19.1666 4.82588 17.6742 3.3335 15.8333 3.3335Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.8333 23.3335H9.16659C7.32564 23.3335 5.83325 24.8259 5.83325 26.6668V33.3335C5.83325 35.1744 7.32564 36.6668 9.16659 36.6668H15.8333C17.6742 36.6668 19.1666 35.1744 19.1666 33.3335V26.6668C19.1666 24.8259 17.6742 23.3335 15.8333 23.3335Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.1665 26.667H24.1665" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.8332 33.3335H24.1665" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.8332 13.3335H24.1665" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.1665 6.66699H24.1665" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export const StarIcon = ({size='16',color='#EBEBEB',fill}) => {
    return(
        <>
        {fill ? <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01978 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18599 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91385 2.05979 5.91984H6.05979L7.33312 2.12651Z" fill="#FDBC15"/>
        </svg>
        :<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01979 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18598 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91384 2.05979 5.91984H6.05979L7.33312 2.12651Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>}
        </>
    )
}


export const SafeIcon = ({size}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.053 5.96007C24.1585 6.01119 23.2612 5.93941 22.3863 5.74674C21.3309 5.38534 20.3438 4.84897 19.4663 4.16007C18.7156 3.62793 18.0028 3.0443 17.333 2.41341C17.049 2.14815 16.6749 2.00061 16.2863 2.00061C15.8977 2.00061 15.5236 2.14815 15.2396 2.41341C14.5876 3.02435 13.9021 3.59857 13.1863 4.13341C12.3034 4.83136 11.3126 5.38079 10.253 5.76007C9.25634 5.98526 8.23255 6.06608 7.21295 6.00007C6.37809 5.9655 5.54574 5.88538 4.71962 5.76007C4.51775 5.73015 4.31191 5.74118 4.1144 5.79251C3.91688 5.84384 3.73172 5.93442 3.56996 6.05885C3.40821 6.18328 3.27316 6.33901 3.17288 6.51675C3.0726 6.6945 3.00914 6.89061 2.98629 7.09341C2.91962 7.73341 2.74629 9.40007 2.66629 11.2534C2.55417 13.1051 2.67061 14.9635 3.01295 16.7867C3.97834 19.8074 5.75388 22.5053 8.14629 24.5867C10.0479 26.3804 12.1098 27.9961 14.3063 29.4134C14.8949 29.8176 15.5922 30.0339 16.3063 30.0339C17.0203 30.0339 17.7176 29.8176 18.3063 29.4134C20.3863 27.9591 22.3318 26.3215 24.1196 24.5201C26.372 22.4234 28.04 19.7766 28.9596 16.8401" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.666 14.6667L18.4793 18.48C18.5031 18.5059 18.5319 18.5265 18.5641 18.5406C18.5962 18.5548 18.6309 18.5621 18.666 18.5621C18.7011 18.5621 18.7358 18.5548 18.768 18.5406C18.8001 18.5265 18.829 18.5059 18.8527 18.48L29.3327 8" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}


