document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];  // 사용자가 선택한 파일
    if (file && file.type === 'application/json') {
        const reader = new FileReader();

        reader.onload = function(e) {
            try {
                const json = JSON.parse(e.target.result);
                document.getElementById('fileContent').textContent = JSON.stringify(json, null, 2); // 포맷팅하여 표시
            } catch (error) {
                alert('JSON 파일을 읽는 중 오류가 발생했습니다.');
            }
        };

        reader.onerror = function() {
            alert('파일을 읽는 중 오류가 발생했습니다.');
        };

        reader.readAsText(file);
    } else {
        alert('JSON 파일만 선택할 수 있습니다.');
    }
});
