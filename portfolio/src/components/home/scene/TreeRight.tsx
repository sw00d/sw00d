export const TreeRight = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const leafColor = isDarkMode ? "#001134" : "#2f855a";
    const stemColor = isDarkMode ? "#001134" : "#25150B"
    const leafStyle = {
        fill: leafColor,
        fillOpacity: 1,
        transition: '.2s',
        fillRule: "evenodd",
        stroke: "none",
    }
    const stemStyle = {
        fill: stemColor,
        fillOpacity: 1,
        transition: '.2s',
        fillRule: "evenodd",
        stroke: "none",
    }
    
    return (
        <g>
            <path
                d="M0 0c-11.849-4.192-30.472-11.366-39.928-18.04-14.527-10.252-23.631-20.539-46.55-19.447-22.92 1.091-33.806 8.467-35.099 2.987-1.29-5.48-5.866-18.221-15.549-19.138-9.686-.916-24.501 1.711-30.636-4.391-6.133-6.098-12.912-11.228-32.602-9.509-19.692 1.72-31.635-4.026-38.415-7.541-5.085-2.636-13.257-6.526-17.023-8.307-1.257-.593-3.619-1.239-3.619-1.239s12.894 7.066 19.674 10.617c6.777 3.55 18.723 9.362 38.414 7.747 19.69-1.614 26.472 3.551 32.604 9.684 6.132 6.134 20.659 3.874 30.342 4.842 9.686.969 13.56 13.881 14.85 19.369.587 2.486 3.359 3.045 8.349 2.032 6.02-1.224 15.416-3.251 27.952-3.781 22.92-.967 32.536 11.207 47.496 20.814C-32.768-8.823-21.379-3.939-11.206 0z"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 881.715 47.06)"
            />
            <path
                d="M0 0s13.876-6.671 19.239-6.199c5.365.472 5.754.823 13.176-5.827 1.856-1.663 3.435-3.494 5.47-4.955 6.107-4.383 12.977-7.106 17.011-5.342 3.53 1.543 7.115 2.625 9.005 3.645 1.449.783 2.034-.889 1.912-1.047 0 0-4.747-1.823-10.555-4.083-5.813-2.259-17.488 3.818-23.624 10.596-1.915 2.119-3.568 3.549-4.814 4.505-2.745 2.105-4.337 1.917-8.17 1.717-4.706-.244-13.432 3.949-16.674 5.434C.527-.895-3.132 1.573 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 574.89 95.12)"
            />
            <path
                d="M0 0c-.007.081-.842-1.637-1.914-1.412-5.245 1.099-24.497 2.806-44.657 3.177-19.829.366-40.536-.544-49.664-6.278-19.689-12.362-34.753-10.636-38.531-9.22-1.129 1.32 1.021.024 1.692.017 5.095-.051 18.497-1.455 36.008 10.218 9.187 6.123 30.495 6.575 50.754 6.667C-21.896 3.278.001-.043 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 813.625 79.172)"
            />
            <path
                d="M0 0s41.346 4.264 45.182 23.445c3.836 19.181 1.705 22.592 9.378 31.543 6.473 7.551 12.643 21.781 14.412 26.042.328.79.507 1.237.507 1.237 1.099 2.394 3.05 1.187 2.35-.708-2.707-6.028-10.142-21.128-15.532-27.614-8.025-9.654-5.542-12.362-9.379-31.541C43.631 5.963 11.395.294 2.246-.988.724-1.204 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 663.456 205.34)"
            />
            <path
                d="M0 0s-4-.777-4.764-2.571C-8.899-12.264-25.18-46.44-40.898-55.422c-18.63-10.646-37.259-6.875-43.691-14.638-6.432-7.762-52.12-2.439-60.99-6.652-6.723-3.194-17.846-9.537-23.483-12.254-1.801-.867-3.575-2.827-3.575-2.827s19.044 9.731 28.003 13.944c8.96 4.214 54.536-1.748 61.131 6.015 6.595 7.762 25.145 3.992 43.999 14.638C-20.648-46.55 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 876.398 47.72)"
            />
            <path
                d="M0 0s-2.001.745-2.419.417C-5.344-1.886-22.927-11.66-33.6-12.242c-12.198-.664-27.243-12.218-27.243-12.218 0-1.35 14.817 10.525 27.414 11.24C-20.83-12.504 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 761.69 145.51)"
            />
            <path
                d="M0 0s-5.784-1.299-6.213-5.412c-.427-4.112-.855-4.112-.855-4.112S-1.502-8.227-.43-5.845C.642-3.463 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 602.11 102.946)"
            />
            <path
                d="M0 0s-2.357 6.493-1.07 9.74c1.283 3.247 2.354 4.545 2.354 4.545S4.498 9.09 3.213 5.627C1.926 2.165 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 596.885 102.363)"
            />
            <path
                d="M0 0s.428 3.247-2.354 6.06c-2.785 2.814-5.999 4.762-5.999 4.762S-7.497 2.381 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 590.031 101.558)"
            />
            <path
                d="M0 0s-1.071 4.979-6.639 4.329c-5.569-.649-6.853-.216-6.853-.216S-6.852-3.029 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 573.589 94.703)"
            />
            <path
                d="M0 0s-4.282 2.597-6.852-.218c-2.573-2.814-4.925-3.463-4.925-3.463S-2.568-5.196 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 589.745 102.422)"
            />
            <path
                d="M0 0s-4.069 1.083-2.57 6.062c1.5 4.978 1.715 6.925 1.715 6.925s2.784-5.194 2.997-7.791C2.355 2.598 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 609.727 105.082)"
            />
            <path
                d="M0 0s-10.923-2.814-10.494-7.143c.428-4.328-.857-5.194-.857-5.194S-3.642-8.225 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 632.54 95.279)"
            />
            <path
                d="M0 0s-2.57 2.596 1.714 6.926c4.283 4.328 4.498 5.844 4.498 5.844s.856-8.225-1.717-10.389C1.927.216 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 629.353 120.793)"
            />
            <path
                d="M0 0s-6.639 2.597-8.994.433c-2.356-2.164-4.498-2.814-4.498-2.814S-3.426-4.761 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 624.447 118.068)"
            />
            <path
                d="M0 0s-4.338 6.137-7.518 4.676c-3.182-1.46-4.772-.877-4.772-.877S-6.218-2.628 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 558.865 148.912)"
            />
            <path
                d="M0 0s-4.338 4.091-10.264 2.776c-5.929-1.315-8.821-1.315-8.821-1.315S-6.939-3.945 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 549.61 153.392)"
            />
            <path
                d="M0 0s-3.325-2.921-2.891-7.452c.433-4.529-.29-5.699-.29-5.699S4.194-7.014 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 540.936 158.457)"
            />
            <path
                d="M0 0s-5.352-3.799-6.509-7.744c-1.156-3.945-.144-6.136-.144-6.136S.143-7.89 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 531.686 163.133)"
            />
            <path
                d="M0 0s-5.349 3.361-9.251 1.899C-13.154.439-15.324.146-15.324.146S-3.904-4.676 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 522.621 167.224)"
            />
            <path
                d="M0 0s-4.19 3.071-9.104 2.486c-4.918-.585-7.377.876-7.377.876S-10.119-3.944 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 536.885 160.797)"
            />
            <path
                d="M0 0s-7.373-4.382-7.807-8.621c-.434-4.238-.723-6.574-.723-6.574S-.289-7.891 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 558.285 150.276)"
            />
            <path
                d="M0 0s-5.638 0-8.386 2.776c-2.746 2.777-3.037 6.576-3.037 6.576S-2.458 5.845 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 569.08 143.847)"
            />
            <path
                d="M0 0s-8.239-5.698-7.806-9.935c.434-4.239.145-5.552.145-5.552S1.158-5.552 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 576.018 142.093)"
            />
            <path
                d="M0 0s-6.651 1.753-6.939 6.867c-.292 5.114-2.024 8.913-2.024 8.913S.576 7.452 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 587.01 137.416)"
            />
            <path
                d="M0 0c-.868-.146-6.796-3.215-7.087-8.329-.288-5.113-1.011-5.26-1.011-5.26S1.733-5.698 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 597.227 137.416)"
            />
            <path
                d="M0 0s-10.263 2.485-9.685 6.284c.577 3.799-.867 6.721-.867 6.721S-3.178 9.353 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 610.716 134.106)"
            />
            <path
                d="M0 0s-6.071-.439-9.54-5.26c-3.471-4.823-4.193-5.261-4.193-5.261S.58-7.745 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 621.512 135.858)"
            />
            <path
                d="M0 0s-6.918 2.935-8.854.019c-1.935-2.918-3.594-3.258-3.594-3.258S-3.902-5.508 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 705.193 172.374)"
            />
            <path
                d="M0 0s-5.841 1.197-10.19-3.042c-4.346-4.238-6.806-5.761-6.806-5.761S-3.823-7.006 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 699.684 181.056)"
            />
            <path
                d="M0 0s-1.292-4.236 1.463-7.857c2.751-3.625 2.754-4.999 2.754-4.999S7.256-3.759 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 694.975 189.925)"
            />
            <path
                d="M0 0s-2.55-6.047-1.456-10.01c1.092-3.962 3.107-5.294 3.107-5.294S4.274-6.633 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 689.569 198.772)"
            />
            <path
                d="M0 0s-6.317.043-8.865-3.256c-2.552-3.296-4.241-4.687-4.241-4.687S-.859-6.031 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 684.018 207.021)"
            />
            <path
                d="M0 0s-5.182.406-9.051-2.68c-3.874-3.084-6.73-3.136-6.73-3.136S-6.527-8.68 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 692.763 194.048)"
            />
            <path
                d="M0 0s-3.962-7.608-2.1-11.44a363.747 363.747 0 0 0 2.847-5.97S3.908-6.862 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 705.418 173.838)"
            />
            <path
                d="M0 0s-4.795-2.967-8.594-2.053c-3.796.914-6.042 3.992-6.042 3.992S-5.167 3.678 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 711.215 162.69)"
            />
            <path
                d="M0 0s-4.009-9.183-1.406-12.557c2.599-3.376 3.046-4.645 3.046-4.645S3.907-4.112 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 716.189 157.546)"
            />
            <path
                d="M0 0s-6.578-2.009-9.517 2.186c-2.936 4.196-6.412 6.513-6.412 6.513S-3.431 6.641 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 723.073 147.786)"
            />
            <path
                d="M0 0c-.66-.58-4.087-6.309-1.641-10.811C.806-15.31.269-15.815.269-15.815S4.476-3.932 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 731.759 142.41)"
            />
            <path
                d="M0 0s-10.037-3.29-11.543.244c-1.51 3.535-4.277 5.258-4.277 5.258S-7.626 6.278 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 741.49 132.491)"
            />
            <path
                d="M0 0s-4.932-3.568-5.346-9.495c-.411-5.926-.797-6.678-.797-6.678S4.566-6.28 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 751.591 128.3)"
            />
            <path
                d="M0 0s-3.858 6.449-7.142 5.234c-3.282-1.215-4.823-.511-4.823-.511S-6.399-2.149 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 680.935 83.564)"
            />
            <path
                d="M0 0s-4.013 4.41-10.022 3.55c-6.009-.861-8.895-.641-8.895-.641S-7.218-3.405 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 671.366 87.33)"
            />
            <path
                d="M0 0s-3.539-2.661-3.449-7.211c.085-4.549-.724-5.659-.724-5.659S3.646-7.313 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 661.286 95.698)"
            />
            <path
                d="M0 0s-5.622-3.379-7.074-7.225c-1.455-3.846-.613-6.108-.613-6.108S-.457-7.877 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 650.76 97.668)"
            />
            <path
                d="M0 0s-5.078 3.757-9.08 2.598c-4.006-1.16-6.19-1.287-6.19-1.287S-4.249-4.365 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 643.406 99.067)"
            />
            <path
                d="M0 0s-3.947 3.379-8.891 3.17c-4.947-.208-7.286 1.435-7.286 1.435S-10.39-3.164 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 658.117 93.743)"
            />
            <path
                d="M0 0s-7.685-3.81-8.439-8.002c-.755-4.191-1.222-6.501-1.222-6.501S-.888-7.845 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 680.668 87.706)"
            />
            <path
                d="M0 0s-8.65-5.055-8.541-9.313c.111-4.259-.277-5.547-.277-5.547S.73-5.625 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 700.214 79.723)"
            />
            <path
                d="M0 0c-.876-.079-7.02-2.688-7.697-7.765-.678-5.077-1.41-5.168-1.41-5.168S1.297-5.813 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 720.059 75.022)"
            />
            <path
                d="M0 0s-6.088.025-9.916-4.518c-3.826-4.544-4.579-4.926-4.579-4.926S-.013-7.765 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 744.397 75.316)"
            />
            <path
                d="M0 0s2.478-3.672-2.934-6.782c-5.408-3.111-6.789-5.853-6.789-5.853S1.211 3.994 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 643.893 171.854)"
            />
            <path
                d="M0 0s-4.596-3.241-8.629-3.612c-4.034-.368-4.173-.449-4.173-.449S-2.424 3.254 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 647.654 167.692)"
            />
            <path
                d="M0 0s-4.126-3.421-3.68-6.763c.443-3.344-.102-5.606-.102-5.606S2.526-4.395 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 654.376 164.828)"
            />
            <path
                d="M0 0s-4.734-3.321-8.418-1.089C-12.101 1.142-13.266.922-13.266.922S-1.472 3.204 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 660.505 160.507)"
            />
            <path
                d="M0 0s-5.58-4.106-5.184-6.726c.4-2.62.216-6.473.328-5.062C-4.747-10.374 2.207-3.528 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 673.3 155.353)"
            />
            <path
                d="M0 0s-9.936-1.664-11.229.592c-1.298 2.254-4.016 2.491-2.302 2.725C-11.823 3.549-1.094 2.221 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 680.659 152.32)"
            />
            <path
                d="M0 0s-1.767-6.562-5.495-8.106c-3.728-1.542-4.46-3.163-4.46-3.163S-5.302-1.697 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 691.638 150.009)"
            />
            <path
                d="M0 0s-6.899-.517-7.707 2.168c-.806 2.686-1.574 4.343-1.574 4.343S.118 3.968 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 699.335 147.985)"
            />
            <path
                d="M0 0c-2.961-.952-6.727-1.466-6.727-1.466S-4.589 1.561-1 3.025c3.588 1.462 6.179 3.701 6.179 3.701S3.894 2.539 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 702.617 156.693)"
            />
            <path
                d="M0 0s-5.374.358-5.412 3.636c-.037 3.277-1.564 4.649-.898 4.132C-5.644 7.251 1.296 4.492 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 717.02 146.214)"
            />
            <path
                d="M0 0c.109-.836.205-4.53-4.433-6.744-4.632-2.214-7.084-4.373-7.084-4.373S-5.615-3.077 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 730.146 145.067)"
            />
            <path
                d="M0 0c-5.796-5.111-16.972-14.691-23.302-17.505-9.726-4.321-17.801-5.56-24.3-18.953-6.5-13.393-6.074-22.365-9.279-21.011-3.203 1.357-11.141 3.616-14.594-1.518-3.452-5.135-6.668-14.523-11.682-15.673-5.016-1.15-9.731-3.036-14.913-14.841-5.185-11.804-11.809-16.379-15.696-18.88-2.915-1.877-7.426-5.021-9.498-6.476-.691-.485-1.75-1.576-1.75-1.576s7.591 4.61 11.498 7.098c3.909 2.485 10.563 7.035 15.798 18.799 5.241 11.765 9.976 13.637 15.006 14.774 5.03 1.138 8.346 10.223 11.824 15.338 3.48 5.115 11.287 2.392 14.494 1.033 1.456-.614 2.597.743 3.614 3.954 1.229 3.875 3.083 9.967 6.672 17.266 6.563 13.346 15.764 14.156 25.292 18.968C-16.376-16.959-5.15-9.708 0-5.448z"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 912.71 59.697)"
            />
            <path
                d="M0 0s.856 10.396 2.75 13.254c1.896 2.859 2.193 2.944 1.073 9.681-.28 1.682-.732 3.273-.852 4.982-.366 5.126.355 10.055 2.502 11.667 1.878 1.411 3.537 3.027 4.641 3.709.845.522.171 1.491.052 1.481 0 0-2.395-1.991-5.342-4.422-2.947-2.429-3.432-11.354-1.848-17.411.495-1.888.72-3.37.825-4.441.233-2.354-.355-3.185-1.637-5.278C.589 10.652.05 4.112-.189 1.708-.294.639-.156-2.373 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 791.24 217.482)"
            />
            <path
                d="M0 0c.04-.035-1.098.147-1.312-.546-1.055-3.388-6.107-14.939-12.126-26.496-5.921-11.366-12.764-22.744-18.512-25.731-12.397-6.439-16.154-15.627-16.592-18.306.329-1.141.327.571.53.951 1.544 2.905 4.954 11.029 16.325 16.5 5.966 2.87 12.76 14.762 19.046 26.199C-5.065-13.646-.02.018 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 872.937 88.377)"
            />
            <path
                d="M0 0s14.917 21.787 25.926 16.657c11.007-5.132 12.098-7.636 19.045-6.699 5.862.789 15.05-1.134 17.779-1.754.508-.116.792-.185.792-.185 1.563-.29 1.546 1.275.358 1.601-3.921.761-13.945 2.301-18.929 1.717-7.415-.868-8.037 1.569-19.044 6.7C16.493 22.434 3.66 6.339.186 1.649-.395.868 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 762.057 125.37)"
            />
            <path
                d="M0 0s-1.632-1.97-2.785-1.72c-6.239 1.351-28.76 5.145-38.203-.337-11.192-6.495-14.996-18.478-20.955-19.166-5.956-.685-17.302-28.582-22.194-32-3.705-2.59-10.379-6.473-13.508-8.631-1-.689-2.548-.947-2.548-.947s10.848 7.078 15.765 10.546c4.922 3.47 15.903 31.544 21.911 32.323 6.007.779 9.789 12.718 21.051 19.34C-30.207 6.031 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 908.385 64.809)"
            />
            <path
                d="M0 0s-.234-1.415-.531-1.527c-2.08-.78-12.503-7.015-16.089-12.835-4.099-6.655-14.646-10.775-14.646-10.775-.695.514 9.951 4.384 14.198 11.243C-12.821-7.032 0 0 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 822.96 92.528)"
            />
            <path
                d="M0 0s-2.445-2.781-4.685-1.457c-2.239 1.322-2.37 1.08-2.37 1.08s2.381 2.66 3.929 2.358C-1.575 1.681 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 795.613 199.088)"
            />
            <path
                d="M0 0s2.602-3.806 4.66-4.312c2.06-.511 3.054-.399 3.054-.399S6.043-.915 3.872-.323C1.702.269 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 794.303 202.27)"
            />
            <path
                d="M0 0s1.796-.992 2.377-3.642c.585-2.646.594-5.209.594-5.209S-1.089-5.15 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 792.607 206.457)"
            />
            <path
                d="M0 0s2.221-2.5.174-5.403c-2.049-2.909-2.221-3.802-2.221-3.802S-3.663-2.725 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 791.053 218.38)"
            />
            <path
                d="M0 0s.009-3.415-2.223-3.8c-2.232-.382-3.291-1.468-3.291-1.468S-3.453.521 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 792.075 206.288)"
            />
            <path
                d="M0 0s-.698-2.715 2.313-3.762C5.326-4.809 6.39-5.428 6.39-5.428S4.587-1.875 3.322-.766C2.058.345 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 796.866 193.964)"
            />
            <path
                d="M0 0s-4.809-5.113-6.894-3.221C-8.979-1.331-9.817-1.73-9.817-1.73S-5.337 1.071 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 808.918 184.78)"
            />
            <path
                d="M0 0s.539-2.445 4.075-1.666c3.538.776 4.379.321 4.379.321S4.506 2.273 2.604 1.64C.705 1.01 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 794.863 176.869)"
            />
            <path
                d="M0 0s-.714-4.748-2.546-5.257c-1.838-.51-2.829-1.475-2.829-1.475S-3.492-.126 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 794.747 180.684)"
            />
            <path
                d="M0 0s1.809-4.793.081-6.038c-1.728-1.243-1.919-2.368-1.919-2.368S-3.261-2.521 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 758.749 206.075)"
            />
            <path
                d="M0 0s.761-4.014-1.741-6.868c-2.499-2.857-3.387-4.494-3.387-4.494S-4.16-2.429 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 753.605 209.608)"
            />
            <path
                d="M0 0s-2.523-.771-4.708 1.2c-2.188 1.97-3.01 2.007-3.01 2.007S-2.303 5.042 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 748.339 212.592)"
            />
            <path
                d="M0 0s-3.595-1.583-5.973-.734C-8.348.112-9.161 1.52-9.161 1.52S-3.998 3.085 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 743.094 216.052)"
            />
            <path
                d="M0 0s.075-4.308-1.877-5.962c-1.949-1.654-2.769-2.771-2.769-2.771S-3.599-.429 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 738.206 219.624)"
            />
            <path
                d="M0 0s.281-3.544-1.533-6.104c-1.814-2.561-1.821-4.509-1.821-4.509S-5.138-4.228 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 745.893 213.994)"
            />
            <path
                d="M0 0s-4.516-2.506-6.82-1.139C-9.126.23-10.41.956-10.41.956S-4.132 2.841 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 757.872 205.884)"
            />
            <path
                d="M0 0s-1.736-3.193-1.161-5.806c.575-2.611 2.432-4.223 2.432-4.223S2.237-3.618 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 764.49 202.22)"
            />
            <path
                d="M0 0s-5.458-2.496-7.493-.637c-2.038 1.859-2.802 2.196-2.802 2.196S-2.489 2.77 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 767.526 198.958)"
            />
            <path
                d="M0 0s-1.149-4.434 1.382-6.546c2.529-2.111 3.942-4.539 3.942-4.539S3.995-2.512 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 773.305 194.515)"
            />
            <path
                d="M0 0c-.343-.435-3.742-2.625-6.449-.84C-9.158.944-9.456.59-9.456.59S-2.386 3.152 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 776.453 188.732)"
            />
            <path
                d="M0 0s-1.89-6.758.235-7.875c2.123-1.12 3.176-3.051 3.176-3.051S3.813-5.36 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 782.305 182.353)"
            />
            <path
                d="M0 0s-2.094-3.271-5.631-3.399c-3.541-.131-3.986-.372-3.986-.372S-3.788 3.275 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 784.73 175.572)"
            />
            <path
                d="M0 0s-.757-6.088-3.285-6.072c-2.529.018-3.356-.961-3.356-.961S-4.863-.135 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 785.268 104.319)"
            />
            <path
                d="M0 0s-1.435-4.552-5.679-5.577c-4.247-1.027-6.104-2.008-6.104-2.008S-5.763.606 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 776.814 113.318)"
            />
            <path
                d="M0 0s-3.107 1.067-4.325 4.62c-1.219 3.554-2.071 4.188-2.071 4.188S.373 6.699 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 776.397 107.56)"
            />
            <path
                d="M0 0s-4.694 1.039-6.742 3.613C-8.79 6.186-8.865 8.178-8.865 8.178S-2.516 5.982 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 772.089 110.151)"
            />
            <path
                d="M0 0s-2.328-4.347-5.32-4.573c-2.991-.229-4.483-.746-4.483-.746S-4.057 2.189 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 761.374 121.657)"
            />
            <path
                d="M0 0s-1.68-3.735-5.032-4.964C-8.385-6.197-9.483-8.13-9.483-8.13S-7.81-.473 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 770.285 110.937)"
            />
            <path
                d="M0 0s-6.187.792-7.871 3.83a323.244 323.244 0 0 1-2.638 4.698S-2.795 5.835 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 785.242 101.212)"
            />
            <path
                d="M0 0s-3.626-1.917-4.476-4.938c-.842-3.021.226-5.977.226-5.977S.353-5.231 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 793.625 101.92)"
            />
            <path
                d="M0 0s-7.184 1.483-8.305 4.818c-1.122 3.334-1.743 4.223-1.743 4.223S-1.092 4.568 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 797.073 101.223)"
            />
            <path
                d="M0 0s-3.696-3.578-2.191-7.523c1.504-3.943 1.645-7.389 1.645-7.389S2.834-5.408 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 799.193 104.535)"
            />
            <path
                d="M0 0c-.606-.186-5.431.107-7.311 3.854-1.877 3.748-2.388 3.612-2.388 3.612S-.771 4.875 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 812.137 107.667)"
            />
            <path
                d="M0 0s-5.776-5.358-4.149-8.018c1.628-2.661 1.664-5.348 1.664-5.348S1.048-8.113 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 822.932 110.584)"
            />
            <path
                d="M0 0s-4.048-1.735-7.873.713c-3.827 2.446-4.434 2.53-4.434 2.53S-2.189 6.021 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 831.474 108.992)"
            />
            <path
                d="M0 0s2.114-4.64.481-6.037c-1.632-1.396-1.747-2.536-1.747-2.536S-3.07-2.805 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 829.822 161.836)"
            />
            <path
                d="M0 0s1.022-3.953-1.271-7.028c-2.292-3.076-3.065-4.792-3.065-4.792S-3.969-2.791 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 824.948 165.82)"
            />
            <path
                d="M0 0s-2.453-.99-4.756.793c-2.303 1.78-3.121 1.745-3.121 1.745S-2.623 4.849 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 817.553 168.343)"
            />
            <path
                d="M0 0s-3.462-1.896-5.879-1.254C-8.297-.615-9.196.724-9.196.724S-4.176 2.742 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 813.302 173.553)"
            />
            <path
                d="M0 0s.359-4.306-1.467-6.13C-3.294-7.956-4.03-9.144-4.03-9.144S-3.547-.743 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 810.322 177.184)"
            />
            <path
                d="M0 0s.514-3.521-1.116-6.243c-1.631-2.721-1.51-4.672-1.51-4.672S-4.823-4.68 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 817.582 170.88)"
            />
            <path
                d="M0 0s-4.318-2.901-6.699-1.734A223.94 223.94 0 0 1-10.403.052S-4.293 2.483 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 827.617 160.41)"
            />
            <path
                d="M0 0s-1.513-3.347-.765-5.912c.746-2.565 2.699-4.016 2.699-4.016S2.463-3.426 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 835.266 157.476)"
            />
            <path
                d="M0 0s-5.254-2.974-7.4-1.29C-9.55.394-10.33.664-10.33.664S-2.656 2.554 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 837.727 152.382)"
            />
            <path
                d="M0 0s-.847-4.537 1.808-6.43c2.654-1.893 4.217-4.2 4.217-4.2S4.136-2.165 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 841.533 149.446)"
            />
            <path
                d="M0 0c-.309-.467-3.537-2.952-6.348-1.403C-9.157.146-9.43-.234-9.43-.234S-2.579 2.946 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 846.245 142.934)"
            />
            <path
                d="M0 0s-1.426-6.928.758-7.864c2.183-.935 3.357-2.777 3.357-2.777S4.139-5.034 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 848.802 136.683)"
            />
            <path
                d="M0 0s-1.863-3.458-5.368-3.895c-3.506-.436-3.935-.717-3.935-.717S-3.982 2.95 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 853.592 129.044)"
            />
            <path
                d="M0 0s-1.35 3.387-5.293 1.114c-3.938-2.272-6.15-1.954-6.15-1.954S2.924-1.009 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 769.447 151.94)"
            />
            <path
                d="M0 0s-3.719-1.655-5.449-4.245c-1.729-2.591-1.83-2.649-1.83-2.649S1.112-3.156 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 773.425 151.28)"
            />
            <path
                d="M0 0s-3.654-1.25-5.559.593c-1.905 1.843-3.505 2.511-3.505 2.511S-1.779 3.751 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 777.7 147.997)"
            />
            <path
                d="M0 0s-3.819-1.712-3.809-5.258c.012-3.548-.558-4.245-.558-4.245S1.438-2.479 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 782.658 145.793)"
            />
            <path
                d="M0 0s-4.619-1.929-6.094-.45c-1.473 1.478-3.927 3.126-3.012 2.553C-8.191 1.527-1.362 3.135 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 790.612 139.409)"
            />
            <path
                d="M0 0s-4.726-6.034-3.812-7.957c.913-1.925.045-3.895.827-2.829C-2.201-9.726.971-1.768 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 795.228 135.767)"
            />
            <path
                d="M0 0s-4.723 1.813-7.064-.029c-2.346-1.842-3.62-1.596-3.62-1.596S-3.024-2.845 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 800.749 129.316)"
            />
            <path
                d="M0 0s-2.892-4.485-1.527-6.272C-.166-8.06.576-9.35.576-9.35S2.501-1.745 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 804.87 124.978)"
            />
            <path
                d="M0 0c-1.691-1.588-3.411-3.928-3.411-3.928s2.671.07 4.912 1.853C3.742-.294 6.092.449 6.092.449S3.023 1.498 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 798.357 121.065)"
            />
            <path
                d="M0 0s-1.78-3.843.238-5.377c2.014-1.535 2.294-3.21 2.221-2.517C2.389-7.2 3.264-1.181 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 812.55 113.688)"
            />
            <path
                d="M0 0c-.476.46-2.729 2.224-5.825.069-3.094-2.152-5.345-2.835-5.345-2.835S-3.995-2.426 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 811.672 111.702)"
            />
            <path
                d="M0 0s16.339-10.976 23.214-11.358c6.876-.384 7.429-.012 15.605-9.783 2.043-2.443 3.707-5.049 6.017-7.271 6.924-6.661 15.119-11.363 20.547-9.869 4.747 1.309 12.628 3.155 12.628 3.155v-2.451s-4.679-.85-12.445-2.647c-7.766-1.797-21.428 8.027-27.952 17.725-2.035 3.031-3.865 5.143-5.267 6.582-3.087 3.164-5.138 3.217-10.025 3.665-5.997.55-16.273 7.453-20.108 9.924C.505-1.227-3.673 2.564 0 0"
                style={stemStyle}
                transform="matrix(1.33333 0 0 -1.33333 808.697 64.935)"
            />
            <path
                d="M0 0s-7.555-.586-8.849-5.713c-1.295-5.124-1.837-5.046-1.837-5.046s7.284.626 9.074 3.442C.179-4.499 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 841.712 79.812)"
            />
            <path
                d="M0 0s-4.945 4.069-8.711.979c-3.768-3.091-6.867-3.482-6.867-3.482S-4.203-6.104 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 826.164 76.89)"
            />
            <path
                d="M0 0s-4.949 2.114-2.143 8.139c2.806 6.026 3.435 8.451 3.435 8.451S3.865 9.508 3.661 6.181C3.456 2.856 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 850.957 83.906)"
            />
            <path
                d="M0 0s-14.335-1.564-14.585-7.121c-.247-5.555-2.034-6.415-2.034-6.415S-6.109-9.742 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 881.616 75.671)"
            />
            <path
                d="M0 0s-2.777 3.755 3.435 8.45c6.211 4.695 6.756 6.572 6.756 6.572S9.773 4.459 6.123 2.19C2.479-.078 0 0 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 872.92 107.374)"
            />
            <path
                d="M0 0s-7.927 4.499-11.303 2.192c-3.376-2.308-6.204-2.739-6.204-2.739S-5.205-5.397 0 0"
                style={leafStyle}
                transform="matrix(1.33333 0 0 -1.33333 867.21 103.029)"
            />
        </g>
    )
}