export const

    Hamburger = function () {
        return (
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" width="20" height="2" rx="0.2" fill="white" />
                <rect y="6" width="25" height="2" rx="0.2" fill="white" />
                <rect x="5" y="12" width="20" height="2" rx="0.2" fill="white" />
            </svg>
        );
    },

    CloseMenu = function () {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95044C4.00437 6.17301 6.173 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288Z" stroke="#A1F294" stroke-width="1.5" />
                <path d="M15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35288 8.95044C2.88237 10.9563 2.88237 13.0437 3.35288 15.0496C4.00437 17.827 6.17301 19.9956 8.95044 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M13.7678 10.2322L10.2322 13.7677M13.7678 13.7677L10.2322 10.2322" stroke="#A1F294" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        );
    },

    Search = function () {
        return (
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="9.33331" cy="8.86687" rx="6" ry="5.7" stroke="black" stroke-opacity="0.5" stroke-width="2" />
                <path d="M16.5413 15.184C16.4995 15.244 16.424 15.3158 16.2729 15.4593C16.1218 15.6028 16.0463 15.6746 15.9831 15.7143C15.6134 15.9469 15.1132 15.827 14.9039 15.4556C14.8682 15.3922 14.8375 15.295 14.7762 15.1006C14.7092 14.8881 14.6757 14.7819 14.6692 14.7072C14.6311 14.267 15.0178 13.8996 15.4812 13.9358C15.5598 13.9419 15.6717 13.9738 15.8953 14.0374C16.0999 14.0957 16.2023 14.1248 16.269 14.1588C16.6599 14.3576 16.7861 14.8328 16.5413 15.184Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" />
            </svg>
        );
    },

    Arrow = function () {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12L7 12" stroke="#100F0F" stroke-opacity="0.73" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.0883 16L6.50002 12L11.0883 8" stroke="#100F0F" stroke-opacity="0.73" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    },

    Options = function () {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.93" />
                <circle cx="7.5" cy="12.5" r="1.5" fill="#100F0F" fill-opacity="0.73" />
                <circle cx="11.5" cy="12.5" r="1.5" fill="#100F0F" fill-opacity="0.73" />
                <circle cx="15.5" cy="12.5" r="1.5" fill="#100F0F" fill-opacity="0.73" />
            </svg>
        );
    },

    Verified = function () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
            </svg>
        );
    };