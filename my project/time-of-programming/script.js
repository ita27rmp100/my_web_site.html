function add() {
    localStorage.setItem(
        document.getElementById('date').value,
        String(
            document.getElementById('LearningTime').value
            )
    )
    alert('تم الإضافة')
}
function get(){
    alert(
        'لقد استغرقت مدة '+
        localStorage.getItem( document.getElementById('date').value)+
        'دقيقة في تعلم البرمجة يوم '+
        document.getElementById('date').value
    )
}